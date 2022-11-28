package shared

// ShippingsettingsCustomBatchRequestEntry
// A batch entry encoding a single non-batch shippingsettings request.
type ShippingsettingsCustomBatchRequestEntry struct {
	AccountID        *string           `json:"accountId,omitempty"`
	BatchID          *int64            `json:"batchId,omitempty"`
	MerchantID       *string           `json:"merchantId,omitempty"`
	Method           *string           `json:"method,omitempty"`
	ShippingSettings *ShippingSettings `json:"shippingSettings,omitempty"`
}
