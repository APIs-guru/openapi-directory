package operations

import (
"openapi/pkg/models/shared")

type GetGeocodeQueryParams struct {
    Debug *bool `queryParam:"style=form,explode=true,name=debug"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Point *string `queryParam:"style=form,explode=true,name=point"`
    Provider *string `queryParam:"style=form,explode=true,name=provider"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Reverse *bool `queryParam:"style=form,explode=true,name=reverse"`
    
}

type GetGeocodeRequest struct {
    QueryParams GetGeocodeQueryParams 
    
}

type GetGeocodeResponse struct {
    ContentType string 
    GhError *shared.GhError 
    GeocodingResponse *interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

