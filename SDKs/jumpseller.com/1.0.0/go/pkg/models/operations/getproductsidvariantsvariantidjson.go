package operations

import (
"openapi/pkg/models/shared")

type GetProductsIDVariantsVariantIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    VariantID int32 `pathParam:"style=simple,explode=false,name=variant_id"`
    
}

type GetProductsIDVariantsVariantIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDVariantsVariantIDJSONRequest struct {
    PathParams GetProductsIDVariantsVariantIDJSONPathParams 
    QueryParams GetProductsIDVariantsVariantIDJSONQueryParams 
    
}

type GetProductsIDVariantsVariantIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    Variant *shared.Variant 
    
}

