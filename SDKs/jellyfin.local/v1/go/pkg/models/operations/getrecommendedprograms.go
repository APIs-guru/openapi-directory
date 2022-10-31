package operations

import (
"openapi/pkg/models/shared")

type GetRecommendedProgramsQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableTotalRecordCount *bool `queryParam:"style=form,explode=true,name=enableTotalRecordCount"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    GenreIds []string `queryParam:"style=form,explode=true,name=genreIds"`
    HasAired *bool `queryParam:"style=form,explode=true,name=hasAired"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsAiring *bool `queryParam:"style=form,explode=true,name=isAiring"`
    IsKids *bool `queryParam:"style=form,explode=true,name=isKids"`
    IsMovie *bool `queryParam:"style=form,explode=true,name=isMovie"`
    IsNews *bool `queryParam:"style=form,explode=true,name=isNews"`
    IsSeries *bool `queryParam:"style=form,explode=true,name=isSeries"`
    IsSports *bool `queryParam:"style=form,explode=true,name=isSports"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetRecommendedProgramsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecommendedProgramsRequest struct {
    QueryParams GetRecommendedProgramsQueryParams 
    Security GetRecommendedProgramsSecurity 
    
}

type GetRecommendedProgramsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

