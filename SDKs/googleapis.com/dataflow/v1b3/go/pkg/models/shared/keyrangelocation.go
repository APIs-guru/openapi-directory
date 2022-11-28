package shared

// KeyRangeLocation
// Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
type KeyRangeLocation struct {
	DataDisk                      *string `json:"dataDisk,omitempty"`
	DeliveryEndpoint              *string `json:"deliveryEndpoint,omitempty"`
	DeprecatedPersistentDirectory *string `json:"deprecatedPersistentDirectory,omitempty"`
	End                           *string `json:"end,omitempty"`
	Start                         *string `json:"start,omitempty"`
}
