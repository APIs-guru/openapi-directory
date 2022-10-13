package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePaymentMethodPathParams struct {
	PaymentMethodNumber string `pathParam:"style=simple,explode=false,name=paymentMethodNumber"`
}

type UpdatePaymentMethodRequestBody struct {
	Active        *bool   `form:"name=active"`
	PaypalSubject *string `form:"name=paypal.subject"`
}

type UpdatePaymentMethodSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdatePaymentMethodRequest struct {
	PathParams UpdatePaymentMethodPathParams
	Request    *UpdatePaymentMethodRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdatePaymentMethodSecurity
}

type UpdatePaymentMethodResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
