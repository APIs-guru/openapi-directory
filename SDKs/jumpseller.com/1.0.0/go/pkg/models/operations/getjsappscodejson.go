package operations

import (
"openapi/pkg/models/shared")

type GetJsappsCodeJSONPathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    
}

type GetJsappsCodeJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetJsappsCodeJSONRequest struct {
    PathParams GetJsappsCodeJSONPathParams 
    QueryParams GetJsappsCodeJSONQueryParams 
    
}

type GetJsappsCodeJSONResponse struct {
    ContentType string 
    JsApp *shared.JsApp 
    StatusCode int64 
    
}

