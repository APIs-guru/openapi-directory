package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDEvaluateScopesProtocolMappersPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDEvaluateScopesProtocolMappersQueryParams struct {
    Scope *string `queryParam:"style=form,explode=true,name=scope"`
    
}

type GetRealmClientsIDEvaluateScopesProtocolMappersRequest struct {
    PathParams GetRealmClientsIDEvaluateScopesProtocolMappersPathParams 
    QueryParams GetRealmClientsIDEvaluateScopesProtocolMappersQueryParams 
    
}

type GetRealmClientsIDEvaluateScopesProtocolMappersResponse struct {
    ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentations []shared.ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation 
    ContentType string 
    StatusCode int64 
    
}

