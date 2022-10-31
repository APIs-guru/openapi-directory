package operations

import (
"openapi/pkg/models/shared")

type GetMediaFoldersQueryParams struct {
    IsHidden *bool `queryParam:"style=form,explode=true,name=isHidden"`
    
}

type GetMediaFoldersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMediaFoldersRequest struct {
    QueryParams GetMediaFoldersQueryParams 
    Security GetMediaFoldersSecurity 
    
}

type GetMediaFoldersResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

