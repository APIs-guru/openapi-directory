package operations

import (
	"openapi/pkg/models/shared"
)

type GetFundsConfirmationConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetFundsConfirmationConsentsConsentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetFundsConfirmationConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetFundsConfirmationConsentsConsentIDRequest struct {
	PathParams GetFundsConfirmationConsentsConsentIDPathParams
	Headers    GetFundsConfirmationConsentsConsentIDHeaders
	Security   GetFundsConfirmationConsentsConsentIDSecurity
}

type GetFundsConfirmationConsentsConsentIDResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	ObErrorResponse1                    *shared.ObErrorResponse1
	ObFundsConfirmationConsentResponse1 *shared.ObFundsConfirmationConsentResponse1
	StatusCode                          int64
}
