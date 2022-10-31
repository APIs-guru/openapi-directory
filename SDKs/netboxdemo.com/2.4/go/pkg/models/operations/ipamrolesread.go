package operations

import (
"openapi/pkg/models/shared")

type IpamRolesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamRolesReadRequest struct {
    PathParams IpamRolesReadPathParams 
    
}

type IpamRolesReadResponse struct {
    ContentType string 
    Role *shared.Role 
    StatusCode int64 
    
}

