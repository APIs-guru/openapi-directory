package operations

import (
"openapi/pkg/models/shared")

type PostRealmGroupsIDRoleMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmGroupsIDRoleMappingsRealmRequest struct {
    PathParams PostRealmGroupsIDRoleMappingsRealmPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmGroupsIDRoleMappingsRealmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

