package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePaymentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreatePaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreatePaymentRequest struct {
	Request  shared.PaymentRequest `request:"mediaType=application/json"`
	Security CreatePaymentSecurity
}

type CreatePaymentResponse struct {
	ContentType                               string
	Payment                                   *shared.Payment
	StatusCode                                int64
	CreatePaymentDefaultApplicationJSONObject *CreatePaymentDefaultApplicationJSON
}
