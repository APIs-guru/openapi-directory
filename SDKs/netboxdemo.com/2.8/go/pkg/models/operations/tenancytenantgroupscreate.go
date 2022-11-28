package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantGroupsCreateRequest struct {
	Request shared.WritableTenantGroupInput `request:"mediaType=application/json"`
}

type TenancyTenantGroupsCreateResponse struct {
	ContentType string
	StatusCode  int64
	TenantGroup *shared.TenantGroup
}
