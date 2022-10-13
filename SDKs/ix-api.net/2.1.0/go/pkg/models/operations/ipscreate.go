package operations

import (
	"openapi/pkg/models/shared"
)

type IpsCreateRequest struct {
	Request *shared.IPAddressRequest `request:"mediaType=application/json"`
}

type IpsCreateResponse struct {
	ContentType string
	IPAddress   *shared.IPAddress
	StatusCode  int64
}
