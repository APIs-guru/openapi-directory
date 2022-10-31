package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersIDRoleMappingsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersIDRoleMappingsRequest struct {
    PathParams GetRealmUsersIDRoleMappingsPathParams 
    
}

type GetRealmUsersIDRoleMappingsResponse struct {
    ContentType string 
    MappingsRepresentation *shared.MappingsRepresentation 
    StatusCode int64 
    
}

