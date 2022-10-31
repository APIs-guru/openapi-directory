package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesRequest struct {
    Security GetRepositoriesSecurity 
    
}

type GetRepositoriesResponse struct {
    ContentType string 
    RepositoryInfos []shared.RepositoryInfo 
    StatusCode int64 
    
}

