package operations

import (
"openapi/pkg/models/shared")

type UpdateLibraryOptionsRequests struct {
    UpdateLibraryOptionsDto *shared.UpdateLibraryOptionsDto `request:"mediaType=application/*+json"`
    UpdateLibraryOptionsDto1 *shared.UpdateLibraryOptionsDto `request:"mediaType=application/json"`
    UpdateLibraryOptionsDto2 *shared.UpdateLibraryOptionsDto `request:"mediaType=text/json"`
    
}

type UpdateLibraryOptionsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateLibraryOptionsRequest struct {
    Request *UpdateLibraryOptionsRequests 
    Security UpdateLibraryOptionsSecurity 
    
}

type UpdateLibraryOptionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

