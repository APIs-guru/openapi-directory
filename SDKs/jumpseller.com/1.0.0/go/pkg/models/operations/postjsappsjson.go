package operations

import (
"openapi/pkg/models/shared")

type PostJsappsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostJsappsJSONRequest struct {
    QueryParams PostJsappsJSONQueryParams 
    Request shared.JsAppEdit `request:"mediaType=application/json"`
    
}

type PostJsappsJSONResponse struct {
    ContentType string 
    JsApp *shared.JsApp 
    StatusCode int64 
    
}

