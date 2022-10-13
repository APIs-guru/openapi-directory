package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayPalPaymentSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreatePayPalPaymentSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreatePayPalPaymentSecurity struct {
	Option1 *CreatePayPalPaymentSecurityOption1 `security:"option"`
	Option2 *CreatePayPalPaymentSecurityOption2 `security:"option"`
}

type CreatePayPalPaymentRequest struct {
	Request  shared.PayPal `request:"mediaType=application/json"`
	Security CreatePayPalPaymentSecurity
}

type CreatePayPalPayment200ApplicationJSON struct {
	CheckoutToken *string `json:"checkout_token"`
	PaymentID     *string `json:"payment_id"`
}

type CreatePayPalPaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreatePayPalPaymentResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreatePayPalPayment200ApplicationJSONObject     *CreatePayPalPayment200ApplicationJSON
	CreatePayPalPaymentDefaultApplicationJSONObject *CreatePayPalPaymentDefaultApplicationJSON
}
