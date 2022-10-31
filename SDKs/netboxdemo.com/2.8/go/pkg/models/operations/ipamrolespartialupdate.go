package operations

import (
"openapi/pkg/models/shared")

type IpamRolesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamRolesPartialUpdateRequest struct {
    PathParams IpamRolesPartialUpdatePathParams 
    Request shared.Role `request:"mediaType=application/json"`
    
}

type IpamRolesPartialUpdateResponse struct {
    ContentType string 
    Role *shared.Role 
    StatusCode int64 
    
}

