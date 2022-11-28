package shared

// ShippingsettingsCustomBatchResponseEntry
// A batch entry encoding a single non-batch shipping settings response.
type ShippingsettingsCustomBatchResponseEntry struct {
	BatchID          *int64            `json:"batchId,omitempty"`
	Errors           *Errors           `json:"errors,omitempty"`
	Kind             *string           `json:"kind,omitempty"`
	ShippingSettings *ShippingSettings `json:"shippingSettings,omitempty"`
}
