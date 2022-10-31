package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddressUtxosPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetAddressUtxosRequest struct {
	PathParams GetAddressUtxosPathParams
}

type GetAddressUtxosResponse struct {
	ContentType             string
	StatusCode              int64
	GetAddressUtxosResponse []shared.GetAddressUtxosResponse
}
