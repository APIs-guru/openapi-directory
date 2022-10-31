package operations

import (
"openapi/pkg/models/shared")

type PostProductsIDOptionsOptionIDValuesJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    
}

type PostProductsIDOptionsOptionIDValuesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostProductsIDOptionsOptionIDValuesJSONRequest struct {
    PathParams PostProductsIDOptionsOptionIDValuesJSONPathParams 
    QueryParams PostProductsIDOptionsOptionIDValuesJSONQueryParams 
    Request shared.ProductOptionValueEdit `request:"mediaType=application/json"`
    
}

type PostProductsIDOptionsOptionIDValuesJSONResponse struct {
    ContentType string 
    ProductOptionValue *shared.ProductOptionValue 
    StatusCode int64 
    
}

