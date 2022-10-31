package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDDigitalProductsDigitalProductIDJSONPathParams struct {
    DigitalProductID int32 `pathParam:"style=simple,explode=false,name=digital_product_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDDigitalProductsDigitalProductIDJSONRequest struct {
    PathParams GetProductsIDDigitalProductsDigitalProductIDJSONPathParams 
    QueryParams GetProductsIDDigitalProductsDigitalProductIDJSONQueryParams 
    
}

type GetProductsIDDigitalProductsDigitalProductIDJSONResponse struct {
    ContentType string 
    DigitalProduct *shared.DigitalProduct 
    NotFound *interface{} 
    StatusCode int64 
    
}

