package operations

import (
"openapi/pkg/models/shared")

type GetArtistByNamePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetArtistByNameQueryParams struct {
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetArtistByNameSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetArtistByNameRequest struct {
    PathParams GetArtistByNamePathParams 
    QueryParams GetArtistByNameQueryParams 
    Security GetArtistByNameSecurity 
    
}

type GetArtistByNameResponse struct {
    BaseItemDto *shared.BaseItemDto 
    ContentType string 
    StatusCode int64 
    
}

