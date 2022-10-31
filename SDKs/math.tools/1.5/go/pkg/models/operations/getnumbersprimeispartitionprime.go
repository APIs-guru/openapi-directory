package operations

import (
"openapi/pkg/models/shared")

type GetNumbersPrimeIsPartitionPrimeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersPrimeIsPartitionPrimeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersPrimeIsPartitionPrimeRequest struct {
    QueryParams GetNumbersPrimeIsPartitionPrimeQueryParams 
    Security GetNumbersPrimeIsPartitionPrimeSecurity 
    
}

type GetNumbersPrimeIsPartitionPrimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

