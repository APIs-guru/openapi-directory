package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsSupportedCurrencyPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsSupportedCurrencyQueryParams struct {
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionMetalsSupportedCurrencyRequest struct {
    PathParams GetAPIVVersionMetalsSupportedCurrencyPathParams 
    QueryParams GetAPIVVersionMetalsSupportedCurrencyQueryParams 
    
}

type GetAPIVVersionMetalsSupportedCurrencyResponse struct {
    Body []byte 
    ContentType string 
    GetAPIVVersionMetalsSupportedCurrency200ApplicationJSONStrings []string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

