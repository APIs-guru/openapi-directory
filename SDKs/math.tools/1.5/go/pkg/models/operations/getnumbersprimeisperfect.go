package operations

import (
"openapi/pkg/models/shared")

type GetNumbersPrimeIsPerfectQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersPrimeIsPerfectSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersPrimeIsPerfectRequest struct {
    QueryParams GetNumbersPrimeIsPerfectQueryParams 
    Security GetNumbersPrimeIsPerfectSecurity 
    
}

type GetNumbersPrimeIsPerfectResponse struct {
    ContentType string 
    StatusCode int64 
    
}

