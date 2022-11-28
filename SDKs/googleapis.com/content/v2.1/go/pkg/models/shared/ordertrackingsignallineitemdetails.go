package shared

// OrderTrackingSignalLineItemDetails
// The line items of the order.
type OrderTrackingSignalLineItemDetails struct {
	Brand              *string `json:"brand,omitempty"`
	Gtin               *string `json:"gtin,omitempty"`
	LineItemID         *string `json:"lineItemId,omitempty"`
	Mpn                *string `json:"mpn,omitempty"`
	ProductDescription *string `json:"productDescription,omitempty"`
	ProductID          *string `json:"productId,omitempty"`
	ProductTitle       *string `json:"productTitle,omitempty"`
	Quantity           *string `json:"quantity,omitempty"`
	Sku                *string `json:"sku,omitempty"`
	Upc                *string `json:"upc,omitempty"`
}
