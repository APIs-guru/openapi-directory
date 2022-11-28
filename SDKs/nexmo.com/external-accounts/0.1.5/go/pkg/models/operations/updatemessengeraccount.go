package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMessengerAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type UpdateMessengerAccountRequestBody struct {
	AccessToken  *string  `json:"access_token,omitempty"`
	Applications []string `json:"applications,omitempty"`
	Name         *string  `json:"name,omitempty"`
}

type UpdateMessengerAccountSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type UpdateMessengerAccount200ApplicationJSON struct {
	AccessToken  string   `json:"access_token"`
	APIKey       string   `json:"api_key"`
	Applications []string `json:"applications,omitempty"`
	ExternalID   string   `json:"external_id"`
	Name         *string  `json:"name,omitempty"`
	Provider     string   `json:"provider"`
}

type UpdateMessengerAccount400ApplicationJSONInvalidParams struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

type UpdateMessengerAccount400ApplicationJSON struct {
	Detail        *string                                                 `json:"detail,omitempty"`
	Instance      *string                                                 `json:"instance,omitempty"`
	InvalidParams []UpdateMessengerAccount400ApplicationJSONInvalidParams `json:"invalid_params,omitempty"`
	Title         *string                                                 `json:"title,omitempty"`
	Type          *string                                                 `json:"type,omitempty"`
}

type UpdateMessengerAccountRequest struct {
	PathParams UpdateMessengerAccountPathParams
	Request    UpdateMessengerAccountRequestBody `request:"mediaType=application/json"`
	Security   UpdateMessengerAccountSecurity
}

type UpdateMessengerAccountResponse struct {
	FourHundredAndOneResponse                      *shared.FourHundredAndOneResponse
	FourHundredAndThreeResponse                    *shared.FourHundredAndThreeResponse
	ContentType                                    string
	StatusCode                                     int64
	UpdateMessengerAccount200ApplicationJSONObject *UpdateMessengerAccount200ApplicationJSON
	UpdateMessengerAccount400ApplicationJSONObject *UpdateMessengerAccount400ApplicationJSON
}
