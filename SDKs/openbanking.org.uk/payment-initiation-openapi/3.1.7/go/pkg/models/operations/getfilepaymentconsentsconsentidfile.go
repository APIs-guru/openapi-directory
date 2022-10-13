package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilePaymentConsentsConsentIDFilePathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetFilePaymentConsentsConsentIDFileHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetFilePaymentConsentsConsentIDFileSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetFilePaymentConsentsConsentIDFileRequest struct {
	PathParams GetFilePaymentConsentsConsentIDFilePathParams
	Headers    GetFilePaymentConsentsConsentIDFileHeaders
	Security   GetFilePaymentConsentsConsentIDFileSecurity
}

type GetFilePaymentConsentsConsentIDFileResponse struct {
	Body             []byte
	ContentType      string
	File             map[string]interface{}
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	StatusCode       int64
}
