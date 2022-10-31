package operations

import (
	"openapi/pkg/models/shared"
)

type GetRawTxPathParams struct {
	Txid string `pathParam:"style=simple,explode=false,name=txid"`
}

type GetRawTxRequest struct {
	PathParams GetRawTxPathParams
}

type GetRawTxResponse struct {
	ContentType      string
	StatusCode       int64
	GetRawTxResponse *shared.GetRawTxResponse
}
