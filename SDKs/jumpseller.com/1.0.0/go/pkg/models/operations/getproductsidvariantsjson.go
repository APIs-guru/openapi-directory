package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDVariantsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDVariantsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDVariantsJSONRequest struct {
    PathParams GetProductsIDVariantsJSONPathParams 
    QueryParams GetProductsIDVariantsJSONQueryParams 
    
}

type GetProductsIDVariantsJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    Variants []shared.Variant 
    
}

