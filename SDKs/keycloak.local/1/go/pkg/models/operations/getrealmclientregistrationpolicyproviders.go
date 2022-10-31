package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientRegistrationPolicyProvidersPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientRegistrationPolicyProvidersRequest struct {
    PathParams GetRealmClientRegistrationPolicyProvidersPathParams 
    
}

type GetRealmClientRegistrationPolicyProvidersResponse struct {
    ComponentTypeRepresentations []shared.ComponentTypeRepresentation 
    ContentType string 
    StatusCode int64 
    
}

