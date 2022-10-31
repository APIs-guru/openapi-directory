package operations

import (
"openapi/pkg/models/shared")

type TenancyTenantGroupsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type TenancyTenantGroupsReadRequest struct {
    PathParams TenancyTenantGroupsReadPathParams 
    
}

type TenancyTenantGroupsReadResponse struct {
    ContentType string 
    StatusCode int64 
    TenantGroup *shared.TenantGroup 
    
}

