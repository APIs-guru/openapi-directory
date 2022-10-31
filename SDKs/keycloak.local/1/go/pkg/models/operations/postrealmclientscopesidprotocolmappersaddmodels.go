package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientScopesIDProtocolMappersAddModelsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientScopesIDProtocolMappersAddModelsRequest struct {
    PathParams PostRealmClientScopesIDProtocolMappersAddModelsPathParams 
    Request []shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmClientScopesIDProtocolMappersAddModelsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

