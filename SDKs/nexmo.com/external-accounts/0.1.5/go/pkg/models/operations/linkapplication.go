package operations

import (
	"openapi/pkg/models/shared"
)

type LinkApplicationProviderEnum string

const (
	LinkApplicationProviderEnumMessenger       LinkApplicationProviderEnum = "messenger"
	LinkApplicationProviderEnumViberServiceMsg LinkApplicationProviderEnum = "viber_service_msg"
	LinkApplicationProviderEnumWhatsapp        LinkApplicationProviderEnum = "whatsapp"
)

type LinkApplicationPathParams struct {
	ExternalID string                      `pathParam:"style=simple,explode=false,name=external_id"`
	Provider   LinkApplicationProviderEnum `pathParam:"style=simple,explode=false,name=provider"`
}

type LinkApplicationRequestBody struct {
	Application string `json:"application"`
}

type LinkApplicationSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type LinkApplication403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type LinkApplication409ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type LinkApplicationRequest struct {
	PathParams LinkApplicationPathParams
	Request    LinkApplicationRequestBody `request:"mediaType=application/json"`
	Security   LinkApplicationSecurity
}

type LinkApplicationResponse struct {
	FourHundredAndOneResponse               *shared.FourHundredAndOneResponse
	AccountResponse                         *shared.AccountResponse
	ContentType                             string
	LinkApplication403ApplicationJSONObject *LinkApplication403ApplicationJSON
	LinkApplication409ApplicationJSONObject *LinkApplication409ApplicationJSON
	StatusCode                              int64
}
