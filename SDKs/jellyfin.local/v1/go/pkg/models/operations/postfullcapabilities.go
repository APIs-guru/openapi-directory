package operations

import (
"openapi/pkg/models/shared")

type PostFullCapabilitiesQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type PostFullCapabilitiesRequests struct {
    ClientCapabilitiesDto *shared.ClientCapabilitiesDto `request:"mediaType=application/*+json"`
    ClientCapabilitiesDto1 *shared.ClientCapabilitiesDto `request:"mediaType=application/json"`
    ClientCapabilitiesDto2 *shared.ClientCapabilitiesDto `request:"mediaType=text/json"`
    
}

type PostFullCapabilitiesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostFullCapabilitiesRequest struct {
    QueryParams PostFullCapabilitiesQueryParams 
    Request PostFullCapabilitiesRequests 
    Security PostFullCapabilitiesSecurity 
    
}

type PostFullCapabilitiesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

