package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDJSONRequest struct {
    PathParams GetProductsIDJSONPathParams 
    QueryParams GetProductsIDJSONQueryParams 
    
}

type GetProductsIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Product *shared.Product 
    StatusCode int64 
    
}

