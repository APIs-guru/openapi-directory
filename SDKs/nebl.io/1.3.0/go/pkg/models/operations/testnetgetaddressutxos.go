package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetAddressUtxosPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type TestnetGetAddressUtxosRequest struct {
	PathParams TestnetGetAddressUtxosPathParams
}

type TestnetGetAddressUtxosResponse struct {
	ContentType             string
	StatusCode              int64
	GetAddressUtxosResponse []shared.GetAddressUtxosResponse
}
