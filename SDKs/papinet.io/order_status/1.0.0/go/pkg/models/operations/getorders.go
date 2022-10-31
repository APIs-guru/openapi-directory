package operations

import (
"openapi/pkg/models/shared")


type GetOrdersOrderStatusEnum string

const (
    GetOrdersOrderStatusEnumActive GetOrdersOrderStatusEnum = "Active"
GetOrdersOrderStatusEnumCancelled GetOrdersOrderStatusEnum = "Cancelled"
GetOrdersOrderStatusEnumCompleted GetOrdersOrderStatusEnum = "Completed"
)


type GetOrdersQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OrderStatus *GetOrdersOrderStatusEnum `queryParam:"style=form,explode=true,name=orderStatus"`
    
}

type GetOrdersRequest struct {
    QueryParams GetOrdersQueryParams 
    
}

type GetOrdersResponse struct {
    ContentType string 
    ListOfOrders *shared.ListOfOrders 
    StatusCode int64 
    
}

