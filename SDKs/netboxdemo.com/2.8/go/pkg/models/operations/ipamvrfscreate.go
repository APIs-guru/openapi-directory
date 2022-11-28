package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVrfsCreateRequest struct {
	Request shared.WritableVrfInput `request:"mediaType=application/json"`
}

type IpamVrfsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Vrf         *shared.Vrf
}
