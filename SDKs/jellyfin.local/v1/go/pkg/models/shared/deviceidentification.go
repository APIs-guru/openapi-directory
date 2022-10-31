package shared



type DeviceIdentification struct {
    FriendlyName *string `json:"FriendlyName,omitempty"`
    Headers []HTTPHeaderInfo `json:"Headers,omitempty"`
    Manufacturer *string `json:"Manufacturer,omitempty"`
    ManufacturerURL *string `json:"ManufacturerUrl,omitempty"`
    ModelDescription *string `json:"ModelDescription,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    ModelNumber *string `json:"ModelNumber,omitempty"`
    ModelURL *string `json:"ModelUrl,omitempty"`
    SerialNumber *string `json:"SerialNumber,omitempty"`
    
}

