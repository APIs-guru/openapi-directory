package shared

type DeviceRole struct {
	Color  string `json:"color"`
	ID     *int64 `json:"id"`
	Name   string `json:"name"`
	Slug   string `json:"slug"`
	VMRole *bool  `json:"vm_role"`
}
