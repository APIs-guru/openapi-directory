package shared

type DeviceVirtualChassis struct {
	ID     *int64       `json:"id,omitempty"`
	Master NestedDevice `json:"master"`
	URL    *string      `json:"url,omitempty"`
}
