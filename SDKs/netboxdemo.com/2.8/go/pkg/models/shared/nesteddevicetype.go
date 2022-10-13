package shared

type NestedDeviceType struct {
	DeviceCount  *int64              `json:"device_count"`
	DisplayName  *string             `json:"display_name"`
	ID           *int64              `json:"id"`
	Manufacturer *NestedManufacturer `json:"manufacturer"`
	Model        string              `json:"model"`
	Slug         string              `json:"slug"`
	URL          *string             `json:"url"`
}
