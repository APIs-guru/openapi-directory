package shared

// MerchantOrderReturn
// Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
type MerchantOrderReturn struct {
	CreationDate      *string                   `json:"creationDate,omitempty"`
	MerchantOrderID   *string                   `json:"merchantOrderId,omitempty"`
	OrderID           *string                   `json:"orderId,omitempty"`
	OrderReturnID     *string                   `json:"orderReturnId,omitempty"`
	ReturnItems       []MerchantOrderReturnItem `json:"returnItems,omitempty"`
	ReturnPricingInfo *ReturnPricingInfo        `json:"returnPricingInfo,omitempty"`
	ReturnShipments   []ReturnShipment          `json:"returnShipments,omitempty"`
}
