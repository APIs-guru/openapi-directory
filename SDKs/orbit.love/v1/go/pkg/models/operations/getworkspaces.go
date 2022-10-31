package operations

import (
"openapi/pkg/models/shared")

type GetWorkspacesSecurity struct {
    Bearer shared.SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetWorkspacesRequest struct {
    Security GetWorkspacesSecurity 
    
}

type GetWorkspacesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

