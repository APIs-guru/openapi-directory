package shared

type WritableInterfaceTemplateInput struct {
	DeviceType int64  `json:"device_type"`
	FormFactor *int64 `json:"form_factor,omitempty"`
	MgmtOnly   *bool  `json:"mgmt_only,omitempty"`
	Name       string `json:"name"`
}
