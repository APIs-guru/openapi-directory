package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsPathParams struct {
	DomesticStandingOrderID string `pathParam:"style=simple,explode=false,name=DomesticStandingOrderId"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsRequest struct {
	PathParams GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsPathParams
	Headers    GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsHeaders
	Security   GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsSecurity
}

type GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsResponse struct {
	Body                           []byte
	ContentType                    string
	Headers                        map[string][]string
	ObErrorResponse1               *shared.ObErrorResponse1
	ObWritePaymentDetailsResponse1 *shared.ObWritePaymentDetailsResponse1
	StatusCode                     int64
}
