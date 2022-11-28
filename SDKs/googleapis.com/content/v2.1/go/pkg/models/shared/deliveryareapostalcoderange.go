package shared

// DeliveryAreaPostalCodeRange
// A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
type DeliveryAreaPostalCodeRange struct {
	FirstPostalCode *string `json:"firstPostalCode,omitempty"`
	LastPostalCode  *string `json:"lastPostalCode,omitempty"`
}
