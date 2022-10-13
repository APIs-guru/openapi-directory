package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMessengerAccountPathParams struct {
	ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
}

type UpdateMessengerAccountRequestBody struct {
	AccessToken  *string  `json:"access_token"`
	Applications []string `json:"applications"`
	Name         *string  `json:"name"`
}

type UpdateMessengerAccountSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateMessengerAccountSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateMessengerAccountSecurity struct {
	Option1 *UpdateMessengerAccountSecurityOption1 `security:"option"`
	Option2 *UpdateMessengerAccountSecurityOption2 `security:"option"`
}

type UpdateMessengerAccountRequest struct {
	PathParams UpdateMessengerAccountPathParams
	Request    UpdateMessengerAccountRequestBody `request:"mediaType=application/json"`
	Security   UpdateMessengerAccountSecurity
}

type UpdateMessengerAccount200ApplicationJSON struct {
	AccessToken  string   `json:"access_token"`
	APIKey       string   `json:"api_key"`
	Applications []string `json:"applications"`
	ExternalID   string   `json:"external_id"`
	Name         *string  `json:"name"`
	Provider     string   `json:"provider"`
}

type UpdateMessengerAccount400ApplicationJSONInvalidParams struct {
	Name   *string `json:"name"`
	Reason *string `json:"reason"`
}

type UpdateMessengerAccount400ApplicationJSON struct {
	Detail        *string                                                 `json:"detail"`
	Instance      *string                                                 `json:"instance"`
	InvalidParams []UpdateMessengerAccount400ApplicationJSONInvalidParams `json:"invalid_params"`
	Title         *string                                                 `json:"title"`
	Type          *string                                                 `json:"type"`
}

type UpdateMessengerAccountResponse struct {
	FourHundredAndOneResponse                      *shared.FourHundredAndOneResponse
	FourHundredAndThreeResponse                    *shared.FourHundredAndThreeResponse
	ContentType                                    string
	StatusCode                                     int64
	UpdateMessengerAccount200ApplicationJSONObject *UpdateMessengerAccount200ApplicationJSON
	UpdateMessengerAccount400ApplicationJSONObject *UpdateMessengerAccount400ApplicationJSON
}
