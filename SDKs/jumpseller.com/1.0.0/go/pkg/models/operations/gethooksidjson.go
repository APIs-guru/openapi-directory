package operations

import (
"openapi/pkg/models/shared")

type GetHooksIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetHooksIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetHooksIDJSONRequest struct {
    PathParams GetHooksIDJSONPathParams 
    QueryParams GetHooksIDJSONQueryParams 
    
}

type GetHooksIDJSONResponse struct {
    ContentType string 
    Hook *shared.Hook 
    NotFound *interface{} 
    StatusCode int64 
    
}

