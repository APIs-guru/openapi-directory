package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantsPartialUpdateRequest struct {
	PathParams TenancyTenantsPartialUpdatePathParams
	Request    shared.WritableTenantInput `request:"mediaType=application/json"`
}

type TenancyTenantsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Tenant      *shared.Tenant
}
