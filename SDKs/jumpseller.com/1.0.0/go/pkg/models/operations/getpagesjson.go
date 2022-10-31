package operations

import (
"openapi/pkg/models/shared")

type GetPagesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetPagesJSONRequest struct {
    QueryParams GetPagesJSONQueryParams 
    
}

type GetPagesJSONResponse struct {
    ContentType string 
    Pages []shared.Page 
    StatusCode int64 
    
}

