package operations

import (
"openapi/pkg/models/shared")

type GetRecordingFoldersQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRecordingFoldersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecordingFoldersRequest struct {
    QueryParams GetRecordingFoldersQueryParams 
    Security GetRecordingFoldersSecurity 
    
}

type GetRecordingFoldersResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

