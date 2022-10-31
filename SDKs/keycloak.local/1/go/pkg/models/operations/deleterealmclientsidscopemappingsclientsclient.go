package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmClientsIDScopeMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmClientsIDScopeMappingsClientsClientRequest struct {
    PathParams DeleteRealmClientsIDScopeMappingsClientsClientPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmClientsIDScopeMappingsClientsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

