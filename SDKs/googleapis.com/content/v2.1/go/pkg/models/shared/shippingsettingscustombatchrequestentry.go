package shared

type ShippingsettingsCustomBatchRequestEntry struct {
	AccountID        *string           `json:"accountId"`
	BatchID          *int64            `json:"batchId"`
	MerchantID       *string           `json:"merchantId"`
	Method           *string           `json:"method"`
	ShippingSettings *ShippingSettings `json:"shippingSettings"`
}
