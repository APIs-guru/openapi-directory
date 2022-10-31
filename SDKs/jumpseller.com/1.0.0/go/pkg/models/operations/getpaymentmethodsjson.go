package operations

import (
"openapi/pkg/models/shared")

type GetPaymentMethodsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetPaymentMethodsJSONRequest struct {
    QueryParams GetPaymentMethodsJSONQueryParams 
    
}

type GetPaymentMethodsJSONResponse struct {
    ContentType string 
    PaymentMethods []shared.PaymentMethod 
    StatusCode int64 
    
}

