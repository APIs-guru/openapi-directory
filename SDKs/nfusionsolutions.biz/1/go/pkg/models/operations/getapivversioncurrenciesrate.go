package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionCurrenciesRatePathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionCurrenciesRateQueryParams struct {
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Pairs string `queryParam:"style=form,explode=true,name=pairs"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionCurrenciesRateRequest struct {
    PathParams GetAPIVVersionCurrenciesRatePathParams 
    QueryParams GetAPIVVersionCurrenciesRateQueryParams 
    
}

type GetAPIVVersionCurrenciesRateResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    RateResponses []shared.RateResponse 
    StatusCode int64 
    
}

