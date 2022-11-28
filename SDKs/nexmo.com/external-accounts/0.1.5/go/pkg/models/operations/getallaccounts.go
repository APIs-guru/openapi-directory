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

type GetAllAccountsSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type GetAllAccounts200ApplicationJSONLinksFirst struct {
	Href *string `json:"href,omitempty"`
}

type GetAllAccounts200ApplicationJSONLinksLast struct {
	Href *string `json:"href,omitempty"`
}

type GetAllAccounts200ApplicationJSONLinksNext struct {
	Href *string `json:"href,omitempty"`
}

type GetAllAccounts200ApplicationJSONLinksPrev struct {
	Href *string `json:"href,omitempty"`
}

type GetAllAccounts200ApplicationJSONLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetAllAccounts200ApplicationJSONLinks struct {
	First *GetAllAccounts200ApplicationJSONLinksFirst `json:"first,omitempty"`
	Last  *GetAllAccounts200ApplicationJSONLinksLast  `json:"last,omitempty"`
	Next  *GetAllAccounts200ApplicationJSONLinksNext  `json:"next,omitempty"`
	Prev  *GetAllAccounts200ApplicationJSONLinksPrev  `json:"prev,omitempty"`
	Self  *GetAllAccounts200ApplicationJSONLinksSelf  `json:"self,omitempty"`
}

type GetAllAccounts200ApplicationJSON struct {
	Embedded   []shared.GetAllAccountResponse         `json:"_embedded,omitempty"`
	Links      *GetAllAccounts200ApplicationJSONLinks `json:"_links,omitempty"`
	PageNumber *int64                                 `json:"page_number,omitempty"`
	PageSize   *int64                                 `json:"page_size,omitempty"`
}

type GetAllAccountsRequest struct {
	QueryParams GetAllAccountsQueryParams
	Security    GetAllAccountsSecurity
}

type GetAllAccountsResponse struct {
	FourHundredAndOneResponse              *shared.FourHundredAndOneResponse
	ContentType                            string
	GetAllAccounts200ApplicationJSONObject *GetAllAccounts200ApplicationJSON
	StatusCode                             int64
}
