package operations

import (
"openapi/pkg/models/shared")


type GetProductsSearchJSONFieldsEnum string

const (
    GetProductsSearchJSONFieldsEnumSku GetProductsSearchJSONFieldsEnum = "sku"
GetProductsSearchJSONFieldsEnumBarcode GetProductsSearchJSONFieldsEnum = "barcode"
GetProductsSearchJSONFieldsEnumBrand GetProductsSearchJSONFieldsEnum = "brand"
GetProductsSearchJSONFieldsEnumName GetProductsSearchJSONFieldsEnum = "name"
GetProductsSearchJSONFieldsEnumDescription GetProductsSearchJSONFieldsEnum = "description"
GetProductsSearchJSONFieldsEnumVariants GetProductsSearchJSONFieldsEnum = "variants"
GetProductsSearchJSONFieldsEnumOptionName GetProductsSearchJSONFieldsEnum = "option_name"
GetProductsSearchJSONFieldsEnumCustomFields GetProductsSearchJSONFieldsEnum = "custom_fields"
GetProductsSearchJSONFieldsEnumCustomFieldsSelects GetProductsSearchJSONFieldsEnum = "custom_fields_selects"
)


type GetProductsSearchJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Fields *GetProductsSearchJSONFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetProductsSearchJSONRequest struct {
    QueryParams GetProductsSearchJSONQueryParams 
    
}

type GetProductsSearchJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Products []shared.Product 
    StatusCode int64 
    
}

