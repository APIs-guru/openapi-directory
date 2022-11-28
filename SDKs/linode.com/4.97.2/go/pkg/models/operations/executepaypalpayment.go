package operations

import (
	"openapi/pkg/models/shared"
)

type ExecutePayPalPaymentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ExecutePayPalPaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ExecutePayPalPaymentRequest struct {
	Request  shared.PayPalExecute `request:"mediaType=application/json"`
	Security ExecutePayPalPaymentSecurity
}

type ExecutePayPalPaymentResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ExecutePayPalPayment200ApplicationJSONObject     map[string]interface{}
	ExecutePayPalPaymentDefaultApplicationJSONObject *ExecutePayPalPaymentDefaultApplicationJSON
}
