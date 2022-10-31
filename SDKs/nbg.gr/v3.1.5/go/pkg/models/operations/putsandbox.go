package operations

import (
"openapi/pkg/models/shared")

type PutSandboxRequests struct {
    Sandbox *shared.Sandbox `request:"mediaType=application/json"`
    Sandbox1 *shared.Sandbox `request:"mediaType=application/json"`
    
}

type PutSandboxSecurity struct {
    AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutSandboxRequest struct {
    Request *PutSandboxRequests 
    Security PutSandboxSecurity 
    
}

type PutSandboxResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

