package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetBlockPathParams struct {
	Blockhash string `pathParam:"style=simple,explode=false,name=blockhash"`
}

type TestnetGetBlockRequest struct {
	PathParams TestnetGetBlockPathParams
}

type TestnetGetBlockResponse struct {
	ContentType      string
	StatusCode       int64
	GetBlockResponse *shared.GetBlockResponse
}
