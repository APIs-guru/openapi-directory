package operations

import (
"openapi/pkg/models/shared")

type SetRemoteAccessRequests struct {
    StartupRemoteAccessDto *shared.StartupRemoteAccessDto `request:"mediaType=application/*+json"`
    StartupRemoteAccessDto1 *shared.StartupRemoteAccessDto `request:"mediaType=application/json"`
    StartupRemoteAccessDto2 *shared.StartupRemoteAccessDto `request:"mediaType=text/json"`
    
}

type SetRemoteAccessSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SetRemoteAccessRequest struct {
    Request SetRemoteAccessRequests 
    Security SetRemoteAccessSecurity 
    
}

type SetRemoteAccessResponse struct {
    ContentType string 
    StatusCode int64 
    
}

