package shared

type DeviceRole struct {
	Color               *string `json:"color,omitempty"`
	Description         *string `json:"description,omitempty"`
	DeviceCount         *int64  `json:"device_count,omitempty"`
	ID                  *int64  `json:"id,omitempty"`
	Name                string  `json:"name"`
	Slug                string  `json:"slug"`
	VirtualmachineCount *int64  `json:"virtualmachine_count,omitempty"`
	VMRole              *bool   `json:"vm_role,omitempty"`
}

type DeviceRoleInput struct {
	Color       *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        string  `json:"name"`
	Slug        string  `json:"slug"`
	VMRole      *bool   `json:"vm_role,omitempty"`
}
