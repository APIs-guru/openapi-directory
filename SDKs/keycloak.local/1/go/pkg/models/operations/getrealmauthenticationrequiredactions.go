package operations

import (
"openapi/pkg/models/shared")

type GetRealmAuthenticationRequiredActionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationRequiredActionsRequest struct {
    PathParams GetRealmAuthenticationRequiredActionsPathParams 
    
}

type GetRealmAuthenticationRequiredActionsResponse struct {
    ContentType string 
    RequiredActionProviderRepresentations []shared.RequiredActionProviderRepresentation 
    StatusCode int64 
    
}

