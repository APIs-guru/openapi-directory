package operations

import (
"openapi/pkg/models/shared")

type GetNumbersIsSquareQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersIsSquareSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersIsSquareRequest struct {
    QueryParams GetNumbersIsSquareQueryParams 
    Security GetNumbersIsSquareSecurity 
    
}

type GetNumbersIsSquareResponse struct {
    ContentType string 
    StatusCode int64 
    
}

