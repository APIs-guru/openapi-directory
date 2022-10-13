package shared

type SendCommandToDeviceRequest struct {
	BinaryData *string `json:"binaryData"`
	Subfolder  *string `json:"subfolder"`
}
