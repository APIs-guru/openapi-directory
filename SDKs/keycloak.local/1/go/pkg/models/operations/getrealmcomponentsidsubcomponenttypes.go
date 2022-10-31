package operations

import (
"openapi/pkg/models/shared")

type GetRealmComponentsIDSubComponentTypesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmComponentsIDSubComponentTypesQueryParams struct {
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetRealmComponentsIDSubComponentTypesRequest struct {
    PathParams GetRealmComponentsIDSubComponentTypesPathParams 
    QueryParams GetRealmComponentsIDSubComponentTypesQueryParams 
    
}

type GetRealmComponentsIDSubComponentTypesResponse struct {
    ComponentTypeRepresentations []shared.ComponentTypeRepresentation 
    ContentType string 
    StatusCode int64 
    
}

