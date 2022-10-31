package operations

import (
"openapi/pkg/models/shared")

type RetrieveApplicationPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type RetrieveApplicationQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
    
}

type RetrieveApplicationRequest struct {
    PathParams RetrieveApplicationPathParams 
    QueryParams RetrieveApplicationQueryParams 
    
}

type RetrieveApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    Application *shared.Application 
    
}

