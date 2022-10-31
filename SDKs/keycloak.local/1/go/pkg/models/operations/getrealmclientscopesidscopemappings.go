package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientScopesIDScopeMappingsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientScopesIDScopeMappingsRequest struct {
    PathParams GetRealmClientScopesIDScopeMappingsPathParams 
    
}

type GetRealmClientScopesIDScopeMappingsResponse struct {
    ContentType string 
    MappingsRepresentation *shared.MappingsRepresentation 
    StatusCode int64 
    
}

