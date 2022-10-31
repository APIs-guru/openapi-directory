package operations

import (
"openapi/pkg/models/shared")

type GetPasswordResetProvidersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPasswordResetProvidersRequest struct {
    Security GetPasswordResetProvidersSecurity 
    
}

type GetPasswordResetProvidersResponse struct {
    ContentType string 
    NameIDPairs []shared.NameIDPair 
    StatusCode int64 
    
}

