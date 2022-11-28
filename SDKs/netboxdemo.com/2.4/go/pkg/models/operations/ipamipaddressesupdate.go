package operations

import (
	"openapi/pkg/models/shared"
)

type IpamIPAddressesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamIPAddressesUpdateRequest struct {
	PathParams IpamIPAddressesUpdatePathParams
	Request    shared.WritableIPAddressInput `request:"mediaType=application/json"`
}

type IpamIPAddressesUpdateResponse struct {
	ContentType string
	IPAddress   *shared.IPAddress
	StatusCode  int64
}
