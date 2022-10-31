package operations

import (
"openapi/pkg/models/shared")

type GetDirectoryContentsQueryParams struct {
    IncludeDirectories *bool `queryParam:"style=form,explode=true,name=includeDirectories"`
    IncludeFiles *bool `queryParam:"style=form,explode=true,name=includeFiles"`
    Path string `queryParam:"style=form,explode=true,name=path"`
    
}

type GetDirectoryContentsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDirectoryContentsRequest struct {
    QueryParams GetDirectoryContentsQueryParams 
    Security GetDirectoryContentsSecurity 
    
}

type GetDirectoryContentsResponse struct {
    ContentType string 
    FileSystemEntryInfos []shared.FileSystemEntryInfo 
    StatusCode int64 
    
}

