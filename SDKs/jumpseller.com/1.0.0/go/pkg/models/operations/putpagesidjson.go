package operations

import (
"openapi/pkg/models/shared")

type PutPagesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutPagesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutPagesIDJSONRequest struct {
    PathParams PutPagesIDJSONPathParams 
    QueryParams PutPagesIDJSONQueryParams 
    Request shared.PageModify `request:"mediaType=application/json"`
    
}

type PutPagesIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Page *shared.Page 
    StatusCode int64 
    
}

