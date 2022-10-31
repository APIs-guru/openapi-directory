package operations

import (
"openapi/pkg/models/shared")

type VerifySearchPathParams struct {
    Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type VerifySearchQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
    RequestID string `queryParam:"style=form,explode=true,name=request_id"`
    RequestIds []string `queryParam:"style=form,explode=true,name=request_ids"`
    
}

type VerifySearchRequest struct {
    PathParams VerifySearchPathParams 
    QueryParams VerifySearchQueryParams 
    
}

type VerifySearchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    VerifySearch200ApplicationJSONOneOf *interface{} 
    
}

