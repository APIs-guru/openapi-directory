package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmUsersIDRoleMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmUsersIDRoleMappingsRealmRequest struct {
    PathParams DeleteRealmUsersIDRoleMappingsRealmPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmUsersIDRoleMappingsRealmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

