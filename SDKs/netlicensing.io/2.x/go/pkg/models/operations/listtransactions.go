package operations

import (
	"openapi/pkg/models/shared"
)

type ListTransactionsSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ListTransactionsRequest struct {
	Security ListTransactionsSecurity
}

type ListTransactionsResponse struct {
	Body          []byte
	ContentType   string
	StatusCode    int64
	Netlicensings []interface{}
}
