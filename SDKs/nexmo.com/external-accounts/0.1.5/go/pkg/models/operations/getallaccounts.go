package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllAccountsProviderEnum string

const (
	GetAllAccountsProviderEnumMessenger       GetAllAccountsProviderEnum = "messenger"
	GetAllAccountsProviderEnumViberServiceMsg GetAllAccountsProviderEnum = "viber_service_msg"
	GetAllAccountsProviderEnumWhatsapp        GetAllAccountsProviderEnum = "whatsapp"
)

type GetAllAccountsQueryParams struct {
	PageNumber *int64                      `queryParam:"style=form,explode=true,name=page_number"`
	PageSize   *int64                      `queryParam:"style=form,explode=true,name=page_size"`
	Provider   *GetAllAccountsProviderEnum `queryParam:"style=form,explode=true,name=provider"`
}

type GetAllAccountsSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAllAccountsSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetAllAccountsSecurity struct {
	Option1 *GetAllAccountsSecurityOption1 `security:"option"`
	Option2 *GetAllAccountsSecurityOption2 `security:"option"`
}

type GetAllAccountsRequest struct {
	QueryParams GetAllAccountsQueryParams
	Security    GetAllAccountsSecurity
}

type GetAllAccounts200ApplicationJSONLinksFirst struct {
	Href *string `json:"href"`
}

type GetAllAccounts200ApplicationJSONLinksLast struct {
	Href *string `json:"href"`
}

type GetAllAccounts200ApplicationJSONLinksNext struct {
	Href *string `json:"href"`
}

type GetAllAccounts200ApplicationJSONLinksPrev struct {
	Href *string `json:"href"`
}

type GetAllAccounts200ApplicationJSONLinksSelf struct {
	Href *string `json:"href"`
}

type GetAllAccounts200ApplicationJSONLinks struct {
	First *GetAllAccounts200ApplicationJSONLinksFirst `json:"first"`
	Last  *GetAllAccounts200ApplicationJSONLinksLast  `json:"last"`
	Next  *GetAllAccounts200ApplicationJSONLinksNext  `json:"next"`
	Prev  *GetAllAccounts200ApplicationJSONLinksPrev  `json:"prev"`
	Self  *GetAllAccounts200ApplicationJSONLinksSelf  `json:"self"`
}

type GetAllAccounts200ApplicationJSON struct {
	Embedded   []shared.GetAllAccountResponse         `json:"_embedded"`
	Links      *GetAllAccounts200ApplicationJSONLinks `json:"_links"`
	PageNumber *int64                                 `json:"page_number"`
	PageSize   *int64                                 `json:"page_size"`
}

type GetAllAccountsResponse struct {
	FourHundredAndOneResponse              *shared.FourHundredAndOneResponse
	ContentType                            string
	GetAllAccounts200ApplicationJSONObject *GetAllAccounts200ApplicationJSON
	StatusCode                             int64
}
