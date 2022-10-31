package operations

import (
"openapi/pkg/models/shared")

type GetMovieRecommendationsQueryParams struct {
    CategoryLimit *int32 `queryParam:"style=form,explode=true,name=categoryLimit"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ItemLimit *int32 `queryParam:"style=form,explode=true,name=itemLimit"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetMovieRecommendationsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMovieRecommendationsRequest struct {
    QueryParams GetMovieRecommendationsQueryParams 
    Security GetMovieRecommendationsSecurity 
    
}

type GetMovieRecommendationsResponse struct {
    ContentType string 
    RecommendationDtos []shared.RecommendationDto 
    StatusCode int64 
    
}

