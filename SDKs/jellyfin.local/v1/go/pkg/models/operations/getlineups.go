package operations

import (
"openapi/pkg/models/shared")

type GetLineupsQueryParams struct {
    Country *string `queryParam:"style=form,explode=true,name=country"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetLineupsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLineupsRequest struct {
    QueryParams GetLineupsQueryParams 
    Security GetLineupsSecurity 
    
}

type GetLineupsResponse struct {
    ContentType string 
    NameIDPairs []shared.NameIDPair 
    StatusCode int64 
    
}

