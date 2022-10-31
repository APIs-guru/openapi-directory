package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddressInfoPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetAddressInfoRequest struct {
	PathParams GetAddressInfoPathParams
}

type GetAddressInfoResponse struct {
	ContentType            string
	Error                  *shared.Error
	StatusCode             int64
	GetAddressInfoResponse *shared.GetAddressInfoResponse
}
