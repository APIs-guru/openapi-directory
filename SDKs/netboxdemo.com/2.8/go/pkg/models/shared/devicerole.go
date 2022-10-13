package shared

type DeviceRole struct {
	Color               *string `json:"color"`
	Description         *string `json:"description"`
	DeviceCount         *int64  `json:"device_count"`
	ID                  *int64  `json:"id"`
	Name                string  `json:"name"`
	Slug                string  `json:"slug"`
	VirtualmachineCount *int64  `json:"virtualmachine_count"`
	VMRole              *bool   `json:"vm_role"`
}
