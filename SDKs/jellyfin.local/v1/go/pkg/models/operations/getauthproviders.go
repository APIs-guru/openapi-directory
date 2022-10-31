package operations

import (
"openapi/pkg/models/shared")

type GetAuthProvidersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetAuthProvidersRequest struct {
    Security GetAuthProvidersSecurity 
    
}

type GetAuthProvidersResponse struct {
    ContentType string 
    NameIDPairs []shared.NameIDPair 
    StatusCode int64 
    
}

