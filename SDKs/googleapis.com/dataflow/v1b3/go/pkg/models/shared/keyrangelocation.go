package shared

type KeyRangeLocation struct {
	DataDisk                      *string `json:"dataDisk"`
	DeliveryEndpoint              *string `json:"deliveryEndpoint"`
	DeprecatedPersistentDirectory *string `json:"deprecatedPersistentDirectory"`
	End                           *string `json:"end"`
	Start                         *string `json:"start"`
}
