package operations

import (
"openapi/pkg/models/shared")

type GetRootFolderPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetRootFolderSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRootFolderRequest struct {
    PathParams GetRootFolderPathParams 
    Security GetRootFolderSecurity 
    
}

type GetRootFolderResponse struct {
    BaseItemDto *shared.BaseItemDto 
    ContentType string 
    StatusCode int64 
    
}

