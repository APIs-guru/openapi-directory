package operations

import (
"openapi/pkg/models/shared")

type PostRealmAuthenticationExecutionsExecutionIDConfigPathParams struct {
    ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationExecutionsExecutionIDConfigRequest struct {
    PathParams PostRealmAuthenticationExecutionsExecutionIDConfigPathParams 
    Request shared.AuthenticatorConfigRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmAuthenticationExecutionsExecutionIDConfigResponse struct {
    ContentType string 
    StatusCode int64 
    
}

