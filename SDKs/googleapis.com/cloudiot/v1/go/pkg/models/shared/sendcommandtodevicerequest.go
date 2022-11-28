package shared

// SendCommandToDeviceRequest
// Request for `SendCommandToDevice`.
type SendCommandToDeviceRequest struct {
	BinaryData *string `json:"binaryData,omitempty"`
	Subfolder  *string `json:"subfolder,omitempty"`
}
