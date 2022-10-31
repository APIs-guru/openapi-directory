package shared




type HookEditFieldsEventEnum string

const (
    HookEditFieldsEventEnumOrderUpdated HookEditFieldsEventEnum = "order_updated"
HookEditFieldsEventEnumOrderPendingPayment HookEditFieldsEventEnum = "order_pending_payment"
HookEditFieldsEventEnumOrderPaid HookEditFieldsEventEnum = "order_paid"
HookEditFieldsEventEnumOrderShipped HookEditFieldsEventEnum = "order_shipped"
HookEditFieldsEventEnumOrderCanceled HookEditFieldsEventEnum = "order_canceled"
HookEditFieldsEventEnumOrderAbandoned HookEditFieldsEventEnum = "order_abandoned"
HookEditFieldsEventEnumProductCreated HookEditFieldsEventEnum = "product_created"
HookEditFieldsEventEnumProductUpdated HookEditFieldsEventEnum = "product_updated"
HookEditFieldsEventEnumProductDeleted HookEditFieldsEventEnum = "product_deleted"
HookEditFieldsEventEnumCustomerCreated HookEditFieldsEventEnum = "customer_created"
HookEditFieldsEventEnumCustomerUpdated HookEditFieldsEventEnum = "customer_updated"
HookEditFieldsEventEnumCustomerDeleted HookEditFieldsEventEnum = "customer_deleted"
)


type HookEditFields struct {
    Event HookEditFieldsEventEnum `json:"event"`
    URL string `json:"url"`
    
}

