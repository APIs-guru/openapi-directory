package operations

import (
"openapi/pkg/models/shared")

type OsBrowsersQueryParams struct {
    Os *string `queryParam:"style=form,explode=true,name=os"`
    
}

type OsBrowsersSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type OsBrowsersRequest struct {
    QueryParams OsBrowsersQueryParams 
    Security OsBrowsersSecurity 
    
}

type OsBrowsersResponse struct {
    AccessDenied *interface{} 
    ContentType string 
    StatusCode int64 
    OsBrowsers *interface{} 
    
}

