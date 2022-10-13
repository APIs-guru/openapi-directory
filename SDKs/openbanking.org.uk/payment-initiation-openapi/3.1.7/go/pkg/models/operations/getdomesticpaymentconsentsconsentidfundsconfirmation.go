package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticPaymentConsentsConsentIDFundsConfirmationPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetDomesticPaymentConsentsConsentIDFundsConfirmationHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetDomesticPaymentConsentsConsentIDFundsConfirmationSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticPaymentConsentsConsentIDFundsConfirmationRequest struct {
	PathParams GetDomesticPaymentConsentsConsentIDFundsConfirmationPathParams
	Headers    GetDomesticPaymentConsentsConsentIDFundsConfirmationHeaders
	Security   GetDomesticPaymentConsentsConsentIDFundsConfirmationSecurity
}

type GetDomesticPaymentConsentsConsentIDFundsConfirmationResponse struct {
	Body                              []byte
	ContentType                       string
	Headers                           map[string][]string
	ObErrorResponse1                  *shared.ObErrorResponse1
	ObWriteFundsConfirmationResponse1 *shared.ObWriteFundsConfirmationResponse1
	StatusCode                        int64
}
