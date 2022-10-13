package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsPathParams struct {
	InternationalStandingOrderPaymentID string `pathParam:"style=simple,explode=false,name=InternationalStandingOrderPaymentId"`
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsRequest struct {
	PathParams GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsPathParams
	Headers    GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsHeaders
	Security   GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsSecurity
}

type GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsResponse struct {
	Body                           []byte
	ContentType                    string
	Headers                        map[string][]string
	ObErrorResponse1               *shared.ObErrorResponse1
	ObWritePaymentDetailsResponse1 *shared.ObWritePaymentDetailsResponse1
	StatusCode                     int64
}
