package operations

import (
"openapi/pkg/models/shared")

type PutProductsIDOptionsOptionIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    
}

type PutProductsIDOptionsOptionIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutProductsIDOptionsOptionIDJSONRequest struct {
    PathParams PutProductsIDOptionsOptionIDJSONPathParams 
    QueryParams PutProductsIDOptionsOptionIDJSONQueryParams 
    Request shared.ProductOptionEdit `request:"mediaType=application/json"`
    
}

type PutProductsIDOptionsOptionIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    ProductOption *shared.ProductOption 
    StatusCode int64 
    
}

