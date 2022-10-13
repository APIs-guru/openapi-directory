package shared

type ShippingsettingsCustomBatchResponseEntry struct {
	BatchID          *int64            `json:"batchId"`
	Errors           *Errors           `json:"errors"`
	Kind             *string           `json:"kind"`
	ShippingSettings *ShippingSettings `json:"shippingSettings"`
}
