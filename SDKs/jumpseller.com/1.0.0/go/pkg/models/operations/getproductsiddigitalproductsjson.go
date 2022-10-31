package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDDigitalProductsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDDigitalProductsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDDigitalProductsJSONRequest struct {
    PathParams GetProductsIDDigitalProductsJSONPathParams 
    QueryParams GetProductsIDDigitalProductsJSONQueryParams 
    
}

type GetProductsIDDigitalProductsJSONResponse struct {
    ContentType string 
    DigitalProducts []shared.DigitalProduct 
    NotFound *interface{} 
    StatusCode int64 
    
}

