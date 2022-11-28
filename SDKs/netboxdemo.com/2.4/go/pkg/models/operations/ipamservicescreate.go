package operations

import (
	"openapi/pkg/models/shared"
)

type IpamServicesCreateRequest struct {
	Request shared.WritableServiceInput `request:"mediaType=application/json"`
}

type IpamServicesCreateResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
