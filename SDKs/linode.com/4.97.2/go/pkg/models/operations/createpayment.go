package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePaymentSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreatePaymentSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreatePaymentSecurity struct {
	Option1 *CreatePaymentSecurityOption1 `security:"option"`
	Option2 *CreatePaymentSecurityOption2 `security:"option"`
}

type CreatePaymentRequest struct {
	Request  shared.PaymentRequest `request:"mediaType=application/json"`
	Security CreatePaymentSecurity
}

type CreatePaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePaymentResponse struct {
	ContentType                               string
	Payment                                   *shared.Payment
	StatusCode                                int64
	CreatePaymentDefaultApplicationJSONObject *CreatePaymentDefaultApplicationJSON
}
