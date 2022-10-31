package operations

import (
"openapi/pkg/models/shared")

type GetNumbersPrimeIsFibonacciPrimeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersPrimeIsFibonacciPrimeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersPrimeIsFibonacciPrimeRequest struct {
    QueryParams GetNumbersPrimeIsFibonacciPrimeQueryParams 
    Security GetNumbersPrimeIsFibonacciPrimeSecurity 
    
}

type GetNumbersPrimeIsFibonacciPrimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

