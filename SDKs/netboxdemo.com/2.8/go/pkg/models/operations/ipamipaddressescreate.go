package operations

import (
	"openapi/pkg/models/shared"
)

type IpamIPAddressesCreateRequest struct {
	Request shared.WritableIPAddressInput `request:"mediaType=application/json"`
}

type IpamIPAddressesCreateResponse struct {
	ContentType string
	IPAddress   *shared.IPAddress
	StatusCode  int64
}
