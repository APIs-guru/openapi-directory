package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionPathParams struct {
	TransactionNumber string `pathParam:"style=simple,explode=false,name=transactionNumber"`
}

type GetTransactionSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetTransactionRequest struct {
	PathParams GetTransactionPathParams
	Security   GetTransactionSecurity
}

type GetTransactionResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
