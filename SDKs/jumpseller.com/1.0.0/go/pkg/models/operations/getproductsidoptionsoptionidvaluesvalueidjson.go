package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDOptionsOptionIDValuesValueIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    ValueID int32 `pathParam:"style=simple,explode=false,name=value_id"`
    
}

type GetProductsIDOptionsOptionIDValuesValueIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDOptionsOptionIDValuesValueIDJSONRequest struct {
    PathParams GetProductsIDOptionsOptionIDValuesValueIDJSONPathParams 
    QueryParams GetProductsIDOptionsOptionIDValuesValueIDJSONQueryParams 
    
}

type GetProductsIDOptionsOptionIDValuesValueIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    ProductOptionValue *shared.ProductOptionValue 
    StatusCode int64 
    
}

