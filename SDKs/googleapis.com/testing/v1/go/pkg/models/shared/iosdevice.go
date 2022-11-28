package shared

// IosDevice
// A single iOS device.
type IosDevice struct {
	IosModelID   *string `json:"iosModelId,omitempty"`
	IosVersionID *string `json:"iosVersionId,omitempty"`
	Locale       *string `json:"locale,omitempty"`
	Orientation  *string `json:"orientation,omitempty"`
}
