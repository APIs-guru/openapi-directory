package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetFaucetQueryParams struct {
	Address string   `queryParam:"style=form,explode=true,name=address"`
	Amount  *float64 `queryParam:"style=form,explode=true,name=amount"`
}

type TestnetGetFaucetRequest struct {
	QueryParams TestnetGetFaucetQueryParams
}

type TestnetGetFaucetResponse struct {
	ContentType       string
	StatusCode        int64
	GetFaucetResponse *shared.GetFaucetResponse
}
