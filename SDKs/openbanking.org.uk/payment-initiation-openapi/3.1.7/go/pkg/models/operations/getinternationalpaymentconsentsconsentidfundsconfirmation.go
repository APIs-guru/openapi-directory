package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalPaymentConsentsConsentIDFundsConfirmationPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetInternationalPaymentConsentsConsentIDFundsConfirmationHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetInternationalPaymentConsentsConsentIDFundsConfirmationSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalPaymentConsentsConsentIDFundsConfirmationRequest struct {
	PathParams GetInternationalPaymentConsentsConsentIDFundsConfirmationPathParams
	Headers    GetInternationalPaymentConsentsConsentIDFundsConfirmationHeaders
	Security   GetInternationalPaymentConsentsConsentIDFundsConfirmationSecurity
}

type GetInternationalPaymentConsentsConsentIDFundsConfirmationResponse struct {
	Body                              []byte
	ContentType                       string
	Headers                           map[string][]string
	ObErrorResponse1                  *shared.ObErrorResponse1
	ObWriteFundsConfirmationResponse1 *shared.ObWriteFundsConfirmationResponse1
	StatusCode                        int64
}
