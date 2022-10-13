package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMessengerAccountRequestBody struct {
	AccessToken  string   `json:"access_token"`
	Applications []string `json:"applications"`
	ExternalID   string   `json:"external_id"`
	Name         *string  `json:"name"`
}

type CreateMessengerAccountSecurityOption1 struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateMessengerAccountSecurityOption2 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateMessengerAccountSecurity struct {
	Option1 *CreateMessengerAccountSecurityOption1 `security:"option"`
	Option2 *CreateMessengerAccountSecurityOption2 `security:"option"`
}

type CreateMessengerAccountRequest struct {
	Request  CreateMessengerAccountRequestBody `request:"mediaType=application/json"`
	Security CreateMessengerAccountSecurity
}

type CreateMessengerAccount400ApplicationJSONInvalidParams struct {
	Name   *string `json:"name"`
	Reason *string `json:"reason"`
}

type CreateMessengerAccount400ApplicationJSON struct {
	Detail        *string                                                 `json:"detail"`
	Instance      *string                                                 `json:"instance"`
	InvalidParams []CreateMessengerAccount400ApplicationJSONInvalidParams `json:"invalid_params"`
	Title         *string                                                 `json:"title"`
	Type          *string                                                 `json:"type"`
}

type CreateMessengerAccountResponse struct {
	FourHundredAndOneResponse                      *shared.FourHundredAndOneResponse
	FourHundredAndThreeResponse                    *shared.FourHundredAndThreeResponse
	ContentType                                    string
	CreateMessengerAccount400ApplicationJSONObject *CreateMessengerAccount400ApplicationJSON
	MessengerAccountResponse                       *shared.MessengerAccountResponse
	StatusCode                                     int64
}
