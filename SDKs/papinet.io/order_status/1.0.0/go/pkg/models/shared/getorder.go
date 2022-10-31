package shared




type GetOrderOrderStatusEnum string

const (
    GetOrderOrderStatusEnumActive GetOrderOrderStatusEnum = "Active"
GetOrderOrderStatusEnumCancelled GetOrderOrderStatusEnum = "Cancelled"
GetOrderOrderStatusEnumCompleted GetOrderOrderStatusEnum = "Completed"
)


type GetOrder struct {
    ID string `json:"id"`
    Links *PaginationLinks `json:"links,omitempty"`
    NumberOfLineItems int64 `json:"numberOfLineItems"`
    OrderLineItems []OrderLineItem `json:"orderLineItems,omitempty"`
    OrderNumber string `json:"orderNumber"`
    OrderStatus GetOrderOrderStatusEnum `json:"orderStatus"`
    
}

