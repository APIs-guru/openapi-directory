package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantGroupsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantGroupsPartialUpdateRequest struct {
	PathParams TenancyTenantGroupsPartialUpdatePathParams
	Request    shared.TenantGroup `request:"mediaType=application/json"`
}

type TenancyTenantGroupsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
	TenantGroup *shared.TenantGroup
}
