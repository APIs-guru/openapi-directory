package operations

import (
"openapi/pkg/models/shared")

type GetGenresQueryParams struct {
    TopLevelOnly *int64 `queryParam:"style=form,explode=true,name=top_level_only"`
    
}

type GetGenresHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetGenresRequest struct {
    QueryParams GetGenresQueryParams 
    Headers GetGenresHeaders 
    
}

type GetGenresResponse struct {
    ContentType string 
    GetGenresResponse *shared.GetGenresResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

