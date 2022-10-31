package operations

import (
"openapi/pkg/models/shared")

type GetCheckoutCustomFieldsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCheckoutCustomFieldsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCheckoutCustomFieldsIDJSONRequest struct {
    PathParams GetCheckoutCustomFieldsIDJSONPathParams 
    QueryParams GetCheckoutCustomFieldsIDJSONQueryParams 
    
}

type GetCheckoutCustomFieldsIDJSONResponse struct {
    CheckoutCustomField *shared.CheckoutCustomField 
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    
}

