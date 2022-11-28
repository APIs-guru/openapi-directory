package shared

// DeviceNames
// Identifiers used to describe the device.
type DeviceNames struct {
	DefaultNames []string `json:"defaultNames,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Nicknames    []string `json:"nicknames,omitempty"`
}
