package operations

import (
"openapi/pkg/models/shared")

type RemoveMediaPathQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Path *string `queryParam:"style=form,explode=true,name=path"`
    RefreshLibrary *bool `queryParam:"style=form,explode=true,name=refreshLibrary"`
    
}

type RemoveMediaPathSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type RemoveMediaPathRequest struct {
    QueryParams RemoveMediaPathQueryParams 
    Security RemoveMediaPathSecurity 
    
}

type RemoveMediaPathResponse struct {
    ContentType string 
    StatusCode int64 
    
}

