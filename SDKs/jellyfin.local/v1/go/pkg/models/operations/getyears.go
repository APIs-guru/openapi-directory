package operations

import (
"openapi/pkg/models/shared")

type GetYearsQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    ExcludeItemTypes []string `queryParam:"style=form,explode=true,name=excludeItemTypes"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MediaTypes []string `queryParam:"style=form,explode=true,name=mediaTypes"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sortOrder"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetYearsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetYearsRequest struct {
    QueryParams GetYearsQueryParams 
    Security GetYearsSecurity 
    
}

type GetYearsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

