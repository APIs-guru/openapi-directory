package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPathParams struct {
	PaymentID int64 `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetPaymentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
	Security   GetPaymentSecurity
}

type GetPaymentResponse struct {
	ContentType                            string
	Payment                                *shared.Payment
	StatusCode                             int64
	GetPaymentDefaultApplicationJSONObject *GetPaymentDefaultApplicationJSON
}
