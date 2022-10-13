package shared

type OrderHeaderOrderStatusEnum string

const (
	OrderHeaderOrderStatusEnumActive    OrderHeaderOrderStatusEnum = "Active"
	OrderHeaderOrderStatusEnumCancelled OrderHeaderOrderStatusEnum = "Cancelled"
	OrderHeaderOrderStatusEnumCompleted OrderHeaderOrderStatusEnum = "Completed"
)

type OrderHeader struct {
	ID                string                     `json:"id"`
	NumberOfLineItems int64                      `json:"numberOfLineItems"`
	OrderNumber       string                     `json:"orderNumber"`
	OrderStatus       OrderHeaderOrderStatusEnum `json:"orderStatus"`
}
