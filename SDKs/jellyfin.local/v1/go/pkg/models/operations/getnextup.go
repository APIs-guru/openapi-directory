package operations

import (
"openapi/pkg/models/shared")

type GetNextUpQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImges *bool `queryParam:"style=form,explode=true,name=enableImges"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    SeriesID *string `queryParam:"style=form,explode=true,name=seriesId"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetNextUpSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNextUpRequest struct {
    QueryParams GetNextUpQueryParams 
    Security GetNextUpSecurity 
    
}

type GetNextUpResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

