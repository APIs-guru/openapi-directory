package operations

import (
"openapi/pkg/models/shared")

type GetThemeSongsPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetThemeSongsQueryParams struct {
    InheritFromParent *bool `queryParam:"style=form,explode=true,name=inheritFromParent"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetThemeSongsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetThemeSongsRequest struct {
    PathParams GetThemeSongsPathParams 
    QueryParams GetThemeSongsQueryParams 
    Security GetThemeSongsSecurity 
    
}

type GetThemeSongsResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    ThemeMediaResult *shared.ThemeMediaResult 
    
}

