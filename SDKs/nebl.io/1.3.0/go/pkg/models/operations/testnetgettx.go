package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetTxPathParams struct {
	Txid string `pathParam:"style=simple,explode=false,name=txid"`
}

type TestnetGetTxRequest struct {
	PathParams TestnetGetTxPathParams
}

type TestnetGetTxResponse struct {
	ContentType   string
	StatusCode    int64
	GetTxResponse *shared.GetTxResponse
}
