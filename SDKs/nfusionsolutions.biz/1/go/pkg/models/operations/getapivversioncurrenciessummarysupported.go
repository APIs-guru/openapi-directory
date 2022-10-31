package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionCurrenciesSummarySupportedPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionCurrenciesSummarySupportedQueryParams struct {
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionCurrenciesSummarySupportedRequest struct {
    PathParams GetAPIVVersionCurrenciesSummarySupportedPathParams 
    QueryParams GetAPIVVersionCurrenciesSummarySupportedQueryParams 
    
}

type GetAPIVVersionCurrenciesSummarySupportedResponse struct {
    Body []byte 
    ContentType string 
    GetAPIVVersionCurrenciesSummarySupported200ApplicationJSONStrings []string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

