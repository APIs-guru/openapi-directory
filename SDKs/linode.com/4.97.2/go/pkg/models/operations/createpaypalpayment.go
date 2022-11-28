package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayPalPaymentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreatePayPalPayment200ApplicationJSON struct {
	CheckoutToken *string `json:"checkout_token,omitempty"`
	PaymentID     *string `json:"payment_id,omitempty"`
}

type CreatePayPalPaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePayPalPaymentRequest struct {
	Request  shared.PayPal `request:"mediaType=application/json"`
	Security CreatePayPalPaymentSecurity
}

type CreatePayPalPaymentResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreatePayPalPayment200ApplicationJSONObject     *CreatePayPalPayment200ApplicationJSON
	CreatePayPalPaymentDefaultApplicationJSONObject *CreatePayPalPaymentDefaultApplicationJSON
}
