package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilePaymentConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetFilePaymentConsentsConsentIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetFilePaymentConsentsConsentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetFilePaymentConsentsConsentIDRequest struct {
	PathParams GetFilePaymentConsentsConsentIDPathParams
	Headers    GetFilePaymentConsentsConsentIDHeaders
	Security   GetFilePaymentConsentsConsentIDSecurity
}

type GetFilePaymentConsentsConsentIDResponse struct {
	Body                        []byte
	ContentType                 string
	Headers                     map[string][]string
	ObErrorResponse1            *shared.ObErrorResponse1
	ObWriteFileConsentResponse4 *shared.ObWriteFileConsentResponse4
	StatusCode                  int64
}
