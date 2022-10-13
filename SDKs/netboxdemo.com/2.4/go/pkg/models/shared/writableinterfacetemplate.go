package shared

type WritableInterfaceTemplate struct {
	DeviceType int64  `json:"device_type"`
	FormFactor *int64 `json:"form_factor"`
	ID         *int64 `json:"id"`
	MgmtOnly   *bool  `json:"mgmt_only"`
	Name       string `json:"name"`
}
