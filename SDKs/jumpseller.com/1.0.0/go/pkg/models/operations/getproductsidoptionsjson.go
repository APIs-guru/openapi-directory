package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDOptionsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDOptionsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDOptionsJSONRequest struct {
    PathParams GetProductsIDOptionsJSONPathParams 
    QueryParams GetProductsIDOptionsJSONQueryParams 
    
}

type GetProductsIDOptionsJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    ProductOptions []shared.ProductOption 
    StatusCode int64 
    
}

