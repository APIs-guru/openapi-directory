package operations

import (
"openapi/pkg/models/shared")

type GetRecordingGroupsQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRecordingGroupsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecordingGroupsRequest struct {
    QueryParams GetRecordingGroupsQueryParams 
    Security GetRecordingGroupsSecurity 
    
}

type GetRecordingGroupsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

