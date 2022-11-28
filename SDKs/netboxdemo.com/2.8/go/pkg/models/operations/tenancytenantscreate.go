package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsCreateRequest struct {
	Request shared.WritableTenantInput `request:"mediaType=application/json"`
}

type TenancyTenantsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Tenant      *shared.Tenant
}
