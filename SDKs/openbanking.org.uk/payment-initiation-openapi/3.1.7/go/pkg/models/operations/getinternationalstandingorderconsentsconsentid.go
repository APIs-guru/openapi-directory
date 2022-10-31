package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalStandingOrderConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetInternationalStandingOrderConsentsConsentIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetInternationalStandingOrderConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalStandingOrderConsentsConsentIDRequest struct {
	PathParams GetInternationalStandingOrderConsentsConsentIDPathParams
	Headers    GetInternationalStandingOrderConsentsConsentIDHeaders
	Security   GetInternationalStandingOrderConsentsConsentIDSecurity
}

type GetInternationalStandingOrderConsentsConsentIDResponse struct {
	Body                                              []byte
	ContentType                                       string
	Headers                                           map[string][]string
	ObErrorResponse1                                  *shared.ObErrorResponse1
	ObWriteInternationalStandingOrderConsentResponse7 *shared.ObWriteInternationalStandingOrderConsentResponse7
	StatusCode                                        int64
}
