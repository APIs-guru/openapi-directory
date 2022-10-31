package operations

import (
"openapi/pkg/models/shared")

type PostProductsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostProductsJSONRequest struct {
    QueryParams PostProductsJSONQueryParams 
    Request shared.ProductEdit `request:"mediaType=application/json"`
    
}

type PostProductsJSONResponse struct {
    ContentType string 
    Product *shared.Product 
    StatusCode int64 
    
}

