package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetRawTxPathParams struct {
	Txid string `pathParam:"style=simple,explode=false,name=txid"`
}

type TestnetGetRawTxRequest struct {
	PathParams TestnetGetRawTxPathParams
}

type TestnetGetRawTxResponse struct {
	ContentType      string
	StatusCode       int64
	GetRawTxResponse *shared.GetRawTxResponse
}
