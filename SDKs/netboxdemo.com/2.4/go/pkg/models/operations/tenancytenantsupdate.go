package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantsUpdateRequest struct {
	PathParams TenancyTenantsUpdatePathParams
	Request    shared.WritableTenant `request:"mediaType=application/json"`
}

type TenancyTenantsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Tenant      *shared.Tenant
}
