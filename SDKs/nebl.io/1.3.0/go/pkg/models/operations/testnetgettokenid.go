package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetTokenIDPathParams struct {
	Tokensymbol string `pathParam:"style=simple,explode=false,name=tokensymbol"`
}

type TestnetGetTokenIDRequest struct {
	PathParams TestnetGetTokenIDPathParams
}

type TestnetGetTokenIDResponse struct {
	ContentType        string
	StatusCode         int64
	GetTokenIDResponse *shared.GetTokenIDResponse
}
