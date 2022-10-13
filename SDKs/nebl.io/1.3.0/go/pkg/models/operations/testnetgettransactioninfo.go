package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetTransactionInfoPathParams struct {
	Txid string `pathParam:"style=simple,explode=false,name=txid"`
}

type TestnetGetTransactionInfoRequest struct {
	PathParams TestnetGetTransactionInfoPathParams
}

type TestnetGetTransactionInfoResponse struct {
	ContentType                string
	Error                      *shared.Error
	StatusCode                 int64
	GetTransactionInfoResponse *shared.GetTransactionInfoResponse
}
