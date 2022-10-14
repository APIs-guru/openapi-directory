package shared

type ShippingsettingsCustomBatchRequestEntry struct {
	AccountID        *string           `json:"accountId,omitempty"`
	BatchID          *int64            `json:"batchId,omitempty"`
	MerchantID       *string           `json:"merchantId,omitempty"`
	Method           *string           `json:"method,omitempty"`
	ShippingSettings *ShippingSettings `json:"shippingSettings,omitempty"`
}
