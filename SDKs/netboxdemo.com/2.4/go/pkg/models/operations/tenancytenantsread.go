package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TenancyTenantsReadRequest struct {
	PathParams TenancyTenantsReadPathParams
}

type TenancyTenantsReadResponse struct {
	ContentType string
	StatusCode  int64
	Tenant      *shared.Tenant
}
