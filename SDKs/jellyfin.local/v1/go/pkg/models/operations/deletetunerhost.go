package operations

import (
"openapi/pkg/models/shared")

type DeleteTunerHostQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type DeleteTunerHostSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteTunerHostRequest struct {
    QueryParams DeleteTunerHostQueryParams 
    Security DeleteTunerHostSecurity 
    
}

type DeleteTunerHostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

