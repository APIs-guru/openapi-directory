package shared

type NestedDeviceType struct {
	DeviceCount  *int64              `json:"device_count,omitempty"`
	DisplayName  *string             `json:"display_name,omitempty"`
	ID           *int64              `json:"id,omitempty"`
	Manufacturer *NestedManufacturer `json:"manufacturer,omitempty"`
	Model        string              `json:"model"`
	Slug         string              `json:"slug"`
	URL          *string             `json:"url,omitempty"`
}
