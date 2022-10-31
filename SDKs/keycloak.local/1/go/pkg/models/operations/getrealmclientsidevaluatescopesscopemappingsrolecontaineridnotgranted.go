package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleContainerID string `pathParam:"style=simple,explode=false,name=roleContainerId"`
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedQueryParams struct {
    Scope *string `queryParam:"style=form,explode=true,name=scope"`
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedRequest struct {
    PathParams GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedPathParams 
    QueryParams GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedQueryParams 
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDNotGrantedResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

