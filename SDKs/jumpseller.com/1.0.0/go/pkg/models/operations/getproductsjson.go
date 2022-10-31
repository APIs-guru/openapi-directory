package operations

import (
"openapi/pkg/models/shared")

type GetProductsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetProductsJSONRequest struct {
    QueryParams GetProductsJSONQueryParams 
    
}

type GetProductsJSONResponse struct {
    ContentType string 
    Products []shared.Product 
    StatusCode int64 
    
}

