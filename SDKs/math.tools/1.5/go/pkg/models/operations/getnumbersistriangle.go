package operations

import (
"openapi/pkg/models/shared")

type GetNumbersIsTriangleQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersIsTriangleSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersIsTriangleRequest struct {
    QueryParams GetNumbersIsTriangleQueryParams 
    Security GetNumbersIsTriangleSecurity 
    
}

type GetNumbersIsTriangleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

