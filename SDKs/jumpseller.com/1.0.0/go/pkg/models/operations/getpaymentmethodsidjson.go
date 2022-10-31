package operations

import (
"openapi/pkg/models/shared")

type GetPaymentMethodsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPaymentMethodsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetPaymentMethodsIDJSONRequest struct {
    PathParams GetPaymentMethodsIDJSONPathParams 
    QueryParams GetPaymentMethodsIDJSONQueryParams 
    
}

type GetPaymentMethodsIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    PaymentMethod *shared.PaymentMethod 
    StatusCode int64 
    
}

