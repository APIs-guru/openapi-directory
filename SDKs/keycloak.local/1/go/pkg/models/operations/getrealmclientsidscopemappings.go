package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDScopeMappingsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDScopeMappingsRequest struct {
    PathParams GetRealmClientsIDScopeMappingsPathParams 
    
}

type GetRealmClientsIDScopeMappingsResponse struct {
    ContentType string 
    MappingsRepresentation *shared.MappingsRepresentation 
    StatusCode int64 
    
}

