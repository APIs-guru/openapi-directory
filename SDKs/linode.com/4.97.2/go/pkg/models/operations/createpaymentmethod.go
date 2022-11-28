package operations

import (
	"openapi/pkg/models/shared"
)

var CreatePaymentMethodServerList = []string{
	"https://api.linode.com/v4",
}

type CreatePaymentMethodRequestBodyData struct {
	CardNumber  *string `json:"card_number,omitempty"`
	Cvv         *string `json:"cvv,omitempty"`
	ExpiryMonth *int64  `json:"expiry_month,omitempty"`
	ExpiryYear  *int64  `json:"expiry_year,omitempty"`
}

// CreatePaymentMethodRequestBody
// Payment Method Request Object.
type CreatePaymentMethodRequestBody struct {
	Data      CreatePaymentMethodRequestBodyData `json:"data"`
	IsDefault bool                               `json:"is_default"`
	Type      shared.TypeEnum                    `json:"type"`
}

type CreatePaymentMethodSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreatePaymentMethodDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePaymentMethodRequest struct {
	ServerURL *string
	Request   CreatePaymentMethodRequestBody `request:"mediaType=application/json"`
	Security  CreatePaymentMethodSecurity
}

type CreatePaymentMethodResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreatePaymentMethod200ApplicationJSONObject     map[string]interface{}
	CreatePaymentMethodDefaultApplicationJSONObject *CreatePaymentMethodDefaultApplicationJSON
}
