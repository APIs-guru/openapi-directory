package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPathParams struct {
	InternationalScheduledPaymentID string `pathParam:"style=simple,explode=false,name=InternationalScheduledPaymentId"`
}

type GetInternationalScheduledPaymentsInternationalScheduledPaymentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetInternationalScheduledPaymentsInternationalScheduledPaymentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalScheduledPaymentsInternationalScheduledPaymentIDRequest struct {
	PathParams GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPathParams
	Headers    GetInternationalScheduledPaymentsInternationalScheduledPaymentIDHeaders
	Security   GetInternationalScheduledPaymentsInternationalScheduledPaymentIDSecurity
}

type GetInternationalScheduledPaymentsInternationalScheduledPaymentIDResponse struct {
	Body                                   []byte
	ContentType                            string
	Headers                                map[string][]string
	ObErrorResponse1                       *shared.ObErrorResponse1
	ObWriteInternationalScheduledResponse6 *shared.ObWriteInternationalScheduledResponse6
	StatusCode                             int64
}
