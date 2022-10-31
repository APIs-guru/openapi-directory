package operations

import (
"openapi/pkg/models/shared")

type GetNumbersCurrencyQueryParams struct {
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersCurrencySecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersCurrencyRequest struct {
    QueryParams GetNumbersCurrencyQueryParams 
    Security GetNumbersCurrencySecurity 
    
}

type GetNumbersCurrencyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

