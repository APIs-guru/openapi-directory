package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleContainerID string `pathParam:"style=simple,explode=false,name=roleContainerId"`
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedQueryParams struct {
    Scope *string `queryParam:"style=form,explode=true,name=scope"`
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedRequest struct {
    PathParams GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedPathParams 
    QueryParams GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedQueryParams 
    
}

type GetRealmClientsIDEvaluateScopesScopeMappingsRoleContainerIDGrantedResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

