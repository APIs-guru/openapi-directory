package shared

type DeviceVirtualChassis struct {
	ID     *int64       `json:"id"`
	Master NestedDevice `json:"master"`
	URL    *string      `json:"url"`
}
