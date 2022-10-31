package operations

import (
"openapi/pkg/models/shared")

type GetResumeItemsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetResumeItemsQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    ExcludeItemTypes []string `queryParam:"style=form,explode=true,name=excludeItemTypes"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MediaTypes []string `queryParam:"style=form,explode=true,name=mediaTypes"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    SearchTerm *string `queryParam:"style=form,explode=true,name=searchTerm"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    
}

type GetResumeItemsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetResumeItemsRequest struct {
    PathParams GetResumeItemsPathParams 
    QueryParams GetResumeItemsQueryParams 
    Security GetResumeItemsSecurity 
    
}

type GetResumeItemsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

