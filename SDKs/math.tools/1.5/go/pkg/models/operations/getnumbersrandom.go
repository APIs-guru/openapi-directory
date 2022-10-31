package operations

import (
"openapi/pkg/models/shared")

type GetNumbersRandomQueryParams struct {
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Min *int64 `queryParam:"style=form,explode=true,name=min"`
    Total *int64 `queryParam:"style=form,explode=true,name=total"`
    
}

type GetNumbersRandomSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersRandomRequest struct {
    QueryParams GetNumbersRandomQueryParams 
    Security GetNumbersRandomSecurity 
    
}

type GetNumbersRandomResponse struct {
    ContentType string 
    StatusCode int64 
    
}

