package shared

type DeviceIdentification struct {
	FriendlyName     *string          `json:"FriendlyName"`
	Headers          []HTTPHeaderInfo `json:"Headers"`
	Manufacturer     *string          `json:"Manufacturer"`
	ManufacturerURL  *string          `json:"ManufacturerUrl"`
	ModelDescription *string          `json:"ModelDescription"`
	ModelName        *string          `json:"ModelName"`
	ModelNumber      *string          `json:"ModelNumber"`
	ModelURL         *string          `json:"ModelUrl"`
	SerialNumber     *string          `json:"SerialNumber"`
}
