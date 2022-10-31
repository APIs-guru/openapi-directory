package shared

type MerchantOrderReturn struct {
	CreationDate    *string                   `json:"creationDate,omitempty"`
	MerchantOrderID *string                   `json:"merchantOrderId,omitempty"`
	OrderID         *string                   `json:"orderId,omitempty"`
	OrderReturnID   *string                   `json:"orderReturnId,omitempty"`
	ReturnItems     []MerchantOrderReturnItem `json:"returnItems,omitempty"`
	ReturnShipments []ReturnShipment          `json:"returnShipments,omitempty"`
}
