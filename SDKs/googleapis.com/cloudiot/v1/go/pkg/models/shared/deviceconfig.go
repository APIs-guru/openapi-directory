package shared



type DeviceConfig struct {
    BinaryData *string `json:"binaryData,omitempty"`
    CloudUpdateTime *string `json:"cloudUpdateTime,omitempty"`
    DeviceAckTime *string `json:"deviceAckTime,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

