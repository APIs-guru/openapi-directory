package operations

import (
	"openapi/pkg/models/shared"
)

type IpamIPAddressesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamIPAddressesReadRequest struct {
	PathParams IpamIPAddressesReadPathParams
}

type IpamIPAddressesReadResponse struct {
	ContentType string
	IPAddress   *shared.IPAddress
	StatusCode  int64
}
