package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionCurrenciesHistorySupportedPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionCurrenciesHistorySupportedQueryParams struct {
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionCurrenciesHistorySupportedRequest struct {
    PathParams GetAPIVVersionCurrenciesHistorySupportedPathParams 
    QueryParams GetAPIVVersionCurrenciesHistorySupportedQueryParams 
    
}

type GetAPIVVersionCurrenciesHistorySupportedResponse struct {
    Body []byte 
    ContentType string 
    GetAPIVVersionCurrenciesHistorySupported200ApplicationJSONStrings []string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

