package operations

import (
"openapi/pkg/models/shared")

type PutProductsProductIDFieldsFieldIDJSONPathParams struct {
    FieldID int32 `pathParam:"style=simple,explode=false,name=field_id"`
    ProductID int32 `pathParam:"style=simple,explode=false,name=product_id"`
    
}

type PutProductsProductIDFieldsFieldIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutProductsProductIDFieldsFieldIDJSONRequest struct {
    PathParams PutProductsProductIDFieldsFieldIDJSONPathParams 
    QueryParams PutProductsProductIDFieldsFieldIDJSONQueryParams 
    
}

type PutProductsProductIDFieldsFieldIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    ProductCustomField *shared.ProductCustomField 
    StatusCode int64 
    
}

