package shared

type SendCommandToDeviceRequest struct {
	BinaryData *string `json:"binaryData,omitempty"`
	Subfolder  *string `json:"subfolder,omitempty"`
}
