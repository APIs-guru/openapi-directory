package operations

import (
"openapi/pkg/models/shared")

type GetCheckoutCustomFieldsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetCheckoutCustomFieldsJSONRequest struct {
    QueryParams GetCheckoutCustomFieldsJSONQueryParams 
    
}

type GetCheckoutCustomFieldsJSONResponse struct {
    CheckoutCustomFields []shared.CheckoutCustomField 
    ContentType string 
    StatusCode int64 
    
}

