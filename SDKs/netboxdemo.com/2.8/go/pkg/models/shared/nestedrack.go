package shared

type NestedRack struct {
	DeviceCount *int64  `json:"device_count"`
	DisplayName *string `json:"display_name"`
	ID          *int64  `json:"id"`
	Name        string  `json:"name"`
	URL         *string `json:"url"`
}
