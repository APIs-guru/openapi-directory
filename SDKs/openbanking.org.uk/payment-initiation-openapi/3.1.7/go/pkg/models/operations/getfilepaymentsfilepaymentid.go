package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilePaymentsFilePaymentIDPathParams struct {
	FilePaymentID string `pathParam:"style=simple,explode=false,name=FilePaymentId"`
}

type GetFilePaymentsFilePaymentIDHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetFilePaymentsFilePaymentIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetFilePaymentsFilePaymentIDRequest struct {
	PathParams GetFilePaymentsFilePaymentIDPathParams
	Headers    GetFilePaymentsFilePaymentIDHeaders
	Security   GetFilePaymentsFilePaymentIDSecurity
}

type GetFilePaymentsFilePaymentIDResponse struct {
	Body                 []byte
	ContentType          string
	Headers              map[string][]string
	ObErrorResponse1     *shared.ObErrorResponse1
	ObWriteFileResponse3 *shared.ObWriteFileResponse3
	StatusCode           int64
}
