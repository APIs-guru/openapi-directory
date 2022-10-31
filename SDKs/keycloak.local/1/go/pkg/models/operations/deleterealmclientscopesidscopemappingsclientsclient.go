package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmClientScopesIDScopeMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmClientScopesIDScopeMappingsClientsClientRequest struct {
    PathParams DeleteRealmClientScopesIDScopeMappingsClientsClientPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmClientScopesIDScopeMappingsClientsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

