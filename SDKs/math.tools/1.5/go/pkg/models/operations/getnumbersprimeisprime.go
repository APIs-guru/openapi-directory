package operations

import (
"openapi/pkg/models/shared")

type GetNumbersPrimeIsPrimeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersPrimeIsPrimeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersPrimeIsPrimeRequest struct {
    QueryParams GetNumbersPrimeIsPrimeQueryParams 
    Security GetNumbersPrimeIsPrimeSecurity 
    
}

type GetNumbersPrimeIsPrimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

