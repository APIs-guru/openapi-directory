package operations

import (
"openapi/pkg/models/shared")

type GetProductsCategoryCategoryIDJSONPathParams struct {
    CategoryID int32 `pathParam:"style=simple,explode=false,name=category_id"`
    
}

type GetProductsCategoryCategoryIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsCategoryCategoryIDJSONRequest struct {
    PathParams GetProductsCategoryCategoryIDJSONPathParams 
    QueryParams GetProductsCategoryCategoryIDJSONQueryParams 
    
}

type GetProductsCategoryCategoryIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Products []shared.Product 
    StatusCode int64 
    
}

