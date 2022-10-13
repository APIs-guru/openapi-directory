package shared

type NestedPlatform struct {
	DeviceCount         *int64  `json:"device_count"`
	ID                  *int64  `json:"id"`
	Name                string  `json:"name"`
	Slug                string  `json:"slug"`
	URL                 *string `json:"url"`
	VirtualmachineCount *int64  `json:"virtualmachine_count"`
}
