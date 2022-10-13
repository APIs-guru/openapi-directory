package operations

import (
	"openapi/pkg/models/shared"
)

type GetTxPathParams struct {
	Txid string `pathParam:"style=simple,explode=false,name=txid"`
}

type GetTxRequest struct {
	PathParams GetTxPathParams
}

type GetTxResponse struct {
	ContentType   string
	StatusCode    int64
	GetTxResponse *shared.GetTxResponse
}
