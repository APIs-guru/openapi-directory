package operations

import (
"openapi/pkg/models/shared")

type GetNumbersCardinalQueryParams struct {
    Language *string `queryParam:"style=form,explode=true,name=language"`
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersCardinalSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersCardinalRequest struct {
    QueryParams GetNumbersCardinalQueryParams 
    Security GetNumbersCardinalSecurity 
    
}

type GetNumbersCardinalResponse struct {
    ContentType string 
    StatusCode int64 
    
}

