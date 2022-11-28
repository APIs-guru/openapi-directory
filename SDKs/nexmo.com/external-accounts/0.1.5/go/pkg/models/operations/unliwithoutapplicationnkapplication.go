package operations

import (
	"openapi/pkg/models/shared"
)

type UnliWithoutApplicationnkApplicationProviderEnum string

const (
	UnliWithoutApplicationnkApplicationProviderEnumMessenger       UnliWithoutApplicationnkApplicationProviderEnum = "messenger"
	UnliWithoutApplicationnkApplicationProviderEnumViberServiceMsg UnliWithoutApplicationnkApplicationProviderEnum = "viber_service_msg"
	UnliWithoutApplicationnkApplicationProviderEnumWhatsapp        UnliWithoutApplicationnkApplicationProviderEnum = "whatsapp"
)

type UnliWithoutApplicationnkApplicationPathParams struct {
	ApplicationID string                                          `pathParam:"style=simple,explode=false,name=application_id"`
	ExternalID    string                                          `pathParam:"style=simple,explode=false,name=external_id"`
	Provider      UnliWithoutApplicationnkApplicationProviderEnum `pathParam:"style=simple,explode=false,name=provider"`
}

type UnliWithoutApplicationnkApplicationSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type UnliWithoutApplicationnkApplication403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type UnliWithoutApplicationnkApplication409ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type UnliWithoutApplicationnkApplicationRequest struct {
	PathParams UnliWithoutApplicationnkApplicationPathParams
	Security   UnliWithoutApplicationnkApplicationSecurity
}

type UnliWithoutApplicationnkApplicationResponse struct {
	FourHundredAndOneResponse                                   *shared.FourHundredAndOneResponse
	ContentType                                                 string
	StatusCode                                                  int64
	UnliWithoutApplicationnkApplication403ApplicationJSONObject *UnliWithoutApplicationnkApplication403ApplicationJSON
	UnliWithoutApplicationnkApplication409ApplicationJSONObject *UnliWithoutApplicationnkApplication409ApplicationJSON
}
