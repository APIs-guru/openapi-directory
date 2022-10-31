package operations

import (
"openapi/pkg/models/shared")

type GetJsappsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetJsappsJSONRequest struct {
    QueryParams GetJsappsJSONQueryParams 
    
}

type GetJsappsJSONResponse struct {
    App *shared.App 
    ContentType string 
    StatusCode int64 
    
}

