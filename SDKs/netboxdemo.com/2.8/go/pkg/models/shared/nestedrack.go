package shared

type NestedRack struct {
	DeviceCount *int64  `json:"device_count,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        string  `json:"name"`
	URL         *string `json:"url,omitempty"`
}
