package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenIDPathParams struct {
	Tokensymbol string `pathParam:"style=simple,explode=false,name=tokensymbol"`
}

type GetTokenIDRequest struct {
	PathParams GetTokenIDPathParams
}

type GetTokenIDResponse struct {
	ContentType        string
	StatusCode         int64
	GetTokenIDResponse *shared.GetTokenIDResponse
}
