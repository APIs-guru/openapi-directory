package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFundsConfirmationConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type DeleteFundsConfirmationConsentsConsentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type DeleteFundsConfirmationConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type DeleteFundsConfirmationConsentsConsentIDRequest struct {
	PathParams DeleteFundsConfirmationConsentsConsentIDPathParams
	Headers    DeleteFundsConfirmationConsentsConsentIDHeaders
	Security   DeleteFundsConfirmationConsentsConsentIDSecurity
}

type DeleteFundsConfirmationConsentsConsentIDResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	StatusCode       int64
}
