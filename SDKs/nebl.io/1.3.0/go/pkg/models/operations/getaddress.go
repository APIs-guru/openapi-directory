package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddressPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetAddressRequest struct {
	PathParams GetAddressPathParams
}

type GetAddressResponse struct {
	ContentType        string
	StatusCode         int64
	GetAddressResponse *shared.GetAddressResponse
}
