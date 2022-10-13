package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticStandingOrderConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetDomesticStandingOrderConsentsConsentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetDomesticStandingOrderConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticStandingOrderConsentsConsentIDRequest struct {
	PathParams GetDomesticStandingOrderConsentsConsentIDPathParams
	Headers    GetDomesticStandingOrderConsentsConsentIDHeaders
	Security   GetDomesticStandingOrderConsentsConsentIDSecurity
}

type GetDomesticStandingOrderConsentsConsentIDResponse struct {
	Body                                         []byte
	ContentType                                  string
	Headers                                      map[string][]string
	ObErrorResponse1                             *shared.ObErrorResponse1
	ObWriteDomesticStandingOrderConsentResponse6 *shared.ObWriteDomesticStandingOrderConsentResponse6
	StatusCode                                   int64
}
