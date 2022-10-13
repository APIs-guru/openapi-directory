package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticPaymentsDomesticPaymentIDPaymentDetailsPathParams struct {
	DomesticPaymentID string `pathParam:"style=simple,explode=false,name=DomesticPaymentId"`
}

type GetDomesticPaymentsDomesticPaymentIDPaymentDetailsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetDomesticPaymentsDomesticPaymentIDPaymentDetailsSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticPaymentsDomesticPaymentIDPaymentDetailsRequest struct {
	PathParams GetDomesticPaymentsDomesticPaymentIDPaymentDetailsPathParams
	Headers    GetDomesticPaymentsDomesticPaymentIDPaymentDetailsHeaders
	Security   GetDomesticPaymentsDomesticPaymentIDPaymentDetailsSecurity
}

type GetDomesticPaymentsDomesticPaymentIDPaymentDetailsResponse struct {
	Body                           []byte
	ContentType                    string
	Headers                        map[string][]string
	ObErrorResponse1               *shared.ObErrorResponse1
	ObWritePaymentDetailsResponse1 *shared.ObWritePaymentDetailsResponse1
	StatusCode                     int64
}
