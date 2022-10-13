package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalPaymentsInternationalPaymentIDPathParams struct {
	InternationalPaymentID string `pathParam:"style=simple,explode=false,name=InternationalPaymentId"`
}

type GetInternationalPaymentsInternationalPaymentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetInternationalPaymentsInternationalPaymentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalPaymentsInternationalPaymentIDRequest struct {
	PathParams GetInternationalPaymentsInternationalPaymentIDPathParams
	Headers    GetInternationalPaymentsInternationalPaymentIDHeaders
	Security   GetInternationalPaymentsInternationalPaymentIDSecurity
}

type GetInternationalPaymentsInternationalPaymentIDResponse struct {
	Body                          []byte
	ContentType                   string
	Headers                       map[string][]string
	ObErrorResponse1              *shared.ObErrorResponse1
	ObWriteInternationalResponse5 *shared.ObWriteInternationalResponse5
	StatusCode                    int64
}
