package operations

import (
	"openapi/pkg/models/shared"
)

type GetFilePaymentsFilePaymentIDReportFilePathParams struct {
	FilePaymentID string `pathParam:"style=simple,explode=false,name=FilePaymentId"`
}

type GetFilePaymentsFilePaymentIDReportFileHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetFilePaymentsFilePaymentIDReportFileSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetFilePaymentsFilePaymentIDReportFileRequest struct {
	PathParams GetFilePaymentsFilePaymentIDReportFilePathParams
	Headers    GetFilePaymentsFilePaymentIDReportFileHeaders
	Security   GetFilePaymentsFilePaymentIDReportFileSecurity
}

type GetFilePaymentsFilePaymentIDReportFileResponse struct {
	Body             []byte
	ContentType      string
	File             map[string]interface{}
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	StatusCode       int64
}
