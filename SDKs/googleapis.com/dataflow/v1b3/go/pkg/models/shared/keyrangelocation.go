package shared

type KeyRangeLocation struct {
	DataDisk                      *string `json:"dataDisk,omitempty"`
	DeliveryEndpoint              *string `json:"deliveryEndpoint,omitempty"`
	DeprecatedPersistentDirectory *string `json:"deprecatedPersistentDirectory,omitempty"`
	End                           *string `json:"end,omitempty"`
	Start                         *string `json:"start,omitempty"`
}
