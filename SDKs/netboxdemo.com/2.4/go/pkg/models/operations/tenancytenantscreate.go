package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsCreateRequest struct {
	Request shared.WritableTenant `request:"mediaType=application/json"`
}

type TenancyTenantsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Tenant      *shared.Tenant
}
