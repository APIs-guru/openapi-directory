package operations

import (
"openapi/pkg/models/shared")

type GetNumbersPrimeIsFermatPrimeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersPrimeIsFermatPrimeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersPrimeIsFermatPrimeRequest struct {
    QueryParams GetNumbersPrimeIsFermatPrimeQueryParams 
    Security GetNumbersPrimeIsFermatPrimeSecurity 
    
}

type GetNumbersPrimeIsFermatPrimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

