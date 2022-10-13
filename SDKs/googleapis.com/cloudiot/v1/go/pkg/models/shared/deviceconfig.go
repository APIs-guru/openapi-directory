package shared

type DeviceConfig struct {
	BinaryData      *string `json:"binaryData"`
	CloudUpdateTime *string `json:"cloudUpdateTime"`
	DeviceAckTime   *string `json:"deviceAckTime"`
	Version         *string `json:"version"`
}
