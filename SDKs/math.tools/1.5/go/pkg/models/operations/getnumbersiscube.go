package operations

import (
"openapi/pkg/models/shared")

type GetNumbersIsCubeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersIsCubeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersIsCubeRequest struct {
    QueryParams GetNumbersIsCubeQueryParams 
    Security GetNumbersIsCubeSecurity 
    
}

type GetNumbersIsCubeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

