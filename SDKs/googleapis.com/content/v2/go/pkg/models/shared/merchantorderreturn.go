package shared

type MerchantOrderReturn struct {
	CreationDate    *string                   `json:"creationDate"`
	MerchantOrderID *string                   `json:"merchantOrderId"`
	OrderID         *string                   `json:"orderId"`
	OrderReturnID   *string                   `json:"orderReturnId"`
	ReturnItems     []MerchantOrderReturnItem `json:"returnItems"`
	ReturnShipments []ReturnShipment          `json:"returnShipments"`
}
