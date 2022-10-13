package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPathParams struct {
	PaymentID int64 `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetPaymentSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetPaymentSecurity struct {
	Option1 *GetPaymentSecurityOption1 `security:"option"`
	Option2 *GetPaymentSecurityOption2 `security:"option"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
	Security   GetPaymentSecurity
}

type GetPaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetPaymentResponse struct {
	ContentType                            string
	Payment                                *shared.Payment
	StatusCode                             int64
	GetPaymentDefaultApplicationJSONObject *GetPaymentDefaultApplicationJSON
}
