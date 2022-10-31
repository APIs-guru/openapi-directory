package operations

import (
"openapi/pkg/models/shared")

type PostCheckoutCustomFieldsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostCheckoutCustomFieldsJSONRequest struct {
    QueryParams PostCheckoutCustomFieldsJSONQueryParams 
    Request shared.CheckoutCustomFieldEdit `request:"mediaType=application/json"`
    
}

type PostCheckoutCustomFieldsJSONResponse struct {
    CheckoutCustomField *shared.CheckoutCustomField 
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    
}

