package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantGroupsCreateRequest struct {
	Request shared.WritableTenantGroup `request:"mediaType=application/json"`
}

type TenancyTenantGroupsCreateResponse struct {
	ContentType string
	StatusCode  int64
	TenantGroup *shared.TenantGroup
}
