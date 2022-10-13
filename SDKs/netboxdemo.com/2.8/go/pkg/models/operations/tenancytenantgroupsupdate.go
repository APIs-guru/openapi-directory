package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantGroupsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantGroupsUpdateRequest struct {
	PathParams TenancyTenantGroupsUpdatePathParams
	Request    shared.WritableTenantGroup `request:"mediaType=application/json"`
}

type TenancyTenantGroupsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	TenantGroup *shared.TenantGroup
}
