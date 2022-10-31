package operations

import (
"openapi/pkg/models/shared")

type GetAccountsAccountOrdersPathParams struct {
    Account string `pathParam:"style=simple,explode=false,name=account"`
    
}

type GetAccountsAccountOrdersRequest struct {
    PathParams GetAccountsAccountOrdersPathParams 
    
}

type GetAccountsAccountOrdersResponse struct {
    ContentType string 
    StatusCode int64 
    OrderStates []shared.OrderState 
    
}

