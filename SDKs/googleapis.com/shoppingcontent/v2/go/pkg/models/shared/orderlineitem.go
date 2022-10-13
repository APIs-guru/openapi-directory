package shared

type OrderLineItem struct {
	Annotations            []OrderMerchantProvidedAnnotation `json:"annotations"`
	Cancellations          []OrderCancellation               `json:"cancellations"`
	ID                     *string                           `json:"id"`
	Price                  *Price                            `json:"price"`
	Product                *OrderLineItemProduct             `json:"product"`
	QuantityCanceled       *int64                            `json:"quantityCanceled"`
	QuantityDelivered      *int64                            `json:"quantityDelivered"`
	QuantityOrdered        *int64                            `json:"quantityOrdered"`
	QuantityPending        *int64                            `json:"quantityPending"`
	QuantityReadyForPickup *int64                            `json:"quantityReadyForPickup"`
	QuantityReturned       *int64                            `json:"quantityReturned"`
	QuantityShipped        *int64                            `json:"quantityShipped"`
	ReturnInfo             *OrderLineItemReturnInfo          `json:"returnInfo"`
	Returns                []OrderReturn                     `json:"returns"`
	ShippingDetails        *OrderLineItemShippingDetails     `json:"shippingDetails"`
	Tax                    *Price                            `json:"tax"`
}
