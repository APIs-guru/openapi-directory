package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFilePaymentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateFilePaymentsRequests struct {
	ApplicationJosePlusJwe []byte               `request:"mediaType=application/jose+jwe"`
	ObWriteFile2           *shared.ObWriteFile2 `request:"mediaType=application/json"`
	ObWriteFile3           *shared.ObWriteFile2 `request:"mediaType=application/json"`
}

type CreateFilePaymentsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateFilePaymentsRequest struct {
	Headers  CreateFilePaymentsHeaders
	Request  CreateFilePaymentsRequests
	Security CreateFilePaymentsSecurity
}

type CreateFilePaymentsResponse struct {
	Body                 []byte
	ContentType          string
	Headers              map[string][]string
	ObErrorResponse1     *shared.ObErrorResponse1
	ObWriteFileResponse3 *shared.ObWriteFileResponse3
	StatusCode           int64
}
