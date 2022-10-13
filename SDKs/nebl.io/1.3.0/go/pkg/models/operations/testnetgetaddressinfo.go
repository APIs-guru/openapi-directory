package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetAddressInfoPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type TestnetGetAddressInfoRequest struct {
	PathParams TestnetGetAddressInfoPathParams
}

type TestnetGetAddressInfoResponse struct {
	ContentType            string
	Error                  *shared.Error
	StatusCode             int64
	GetAddressInfoResponse *shared.GetAddressInfoResponse
}
