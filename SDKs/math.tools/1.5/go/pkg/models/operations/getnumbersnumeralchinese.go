package operations

import (
"openapi/pkg/models/shared")

type GetNumbersNumeralChineseQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersNumeralChineseSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersNumeralChineseRequest struct {
    QueryParams GetNumbersNumeralChineseQueryParams 
    Security GetNumbersNumeralChineseSecurity 
    
}

type GetNumbersNumeralChineseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

