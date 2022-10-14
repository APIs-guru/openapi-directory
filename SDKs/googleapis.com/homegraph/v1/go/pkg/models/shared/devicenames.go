package shared

type DeviceNames struct {
	DefaultNames []string `json:"defaultNames,omitempty"`
	Name         *string  `json:"name,omitempty"`
	Nicknames    []string `json:"nicknames,omitempty"`
}
