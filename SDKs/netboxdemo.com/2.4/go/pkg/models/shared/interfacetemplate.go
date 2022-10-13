package shared

type InterfaceTemplateFormFactorFormFactor struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type InterfaceTemplate struct {
	DeviceType NestedDeviceType                       `json:"device_type"`
	FormFactor *InterfaceTemplateFormFactorFormFactor `json:"form_factor"`
	ID         *int64                                 `json:"id"`
	MgmtOnly   *bool                                  `json:"mgmt_only"`
	Name       string                                 `json:"name"`
}
