package shared

type OrderLineItem struct {
	Annotations            []OrderMerchantProvidedAnnotation `json:"annotations,omitempty"`
	Cancellations          []OrderCancellation               `json:"cancellations,omitempty"`
	ID                     *string                           `json:"id,omitempty"`
	Price                  *Price                            `json:"price,omitempty"`
	Product                *OrderLineItemProduct             `json:"product,omitempty"`
	QuantityCanceled       *int64                            `json:"quantityCanceled,omitempty"`
	QuantityDelivered      *int64                            `json:"quantityDelivered,omitempty"`
	QuantityOrdered        *int64                            `json:"quantityOrdered,omitempty"`
	QuantityPending        *int64                            `json:"quantityPending,omitempty"`
	QuantityReadyForPickup *int64                            `json:"quantityReadyForPickup,omitempty"`
	QuantityReturned       *int64                            `json:"quantityReturned,omitempty"`
	QuantityShipped        *int64                            `json:"quantityShipped,omitempty"`
	ReturnInfo             *OrderLineItemReturnInfo          `json:"returnInfo,omitempty"`
	Returns                []OrderReturn                     `json:"returns,omitempty"`
	ShippingDetails        *OrderLineItemShippingDetails     `json:"shippingDetails,omitempty"`
	Tax                    *Price                            `json:"tax,omitempty"`
}
