package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticScheduledPaymentConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetDomesticScheduledPaymentConsentsConsentIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetDomesticScheduledPaymentConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticScheduledPaymentConsentsConsentIDRequest struct {
	PathParams GetDomesticScheduledPaymentConsentsConsentIDPathParams
	Headers    GetDomesticScheduledPaymentConsentsConsentIDHeaders
	Security   GetDomesticScheduledPaymentConsentsConsentIDSecurity
}

type GetDomesticScheduledPaymentConsentsConsentIDResponse struct {
	Body                                     []byte
	ContentType                              string
	Headers                                  map[string][]string
	ObErrorResponse1                         *shared.ObErrorResponse1
	ObWriteDomesticScheduledConsentResponse5 *shared.ObWriteDomesticScheduledConsentResponse5
	StatusCode                               int64
}
