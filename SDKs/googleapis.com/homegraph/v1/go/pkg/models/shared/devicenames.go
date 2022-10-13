package shared

type DeviceNames struct {
	DefaultNames []string `json:"defaultNames"`
	Name         *string  `json:"name"`
	Nicknames    []string `json:"nicknames"`
}
