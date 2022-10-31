package operations

import (
"openapi/pkg/models/shared")

type GetThemeMediaPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetThemeMediaQueryParams struct {
    InheritFromParent *bool `queryParam:"style=form,explode=true,name=inheritFromParent"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetThemeMediaSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetThemeMediaRequest struct {
    PathParams GetThemeMediaPathParams 
    QueryParams GetThemeMediaQueryParams 
    Security GetThemeMediaSecurity 
    
}

type GetThemeMediaResponse struct {
    AllThemeMediaResult *shared.AllThemeMediaResult 
    ContentType string 
    StatusCode int64 
    
}

