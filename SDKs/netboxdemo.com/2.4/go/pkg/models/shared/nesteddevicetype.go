package shared

type NestedDeviceType struct {
	ID           *int64              `json:"id"`
	Manufacturer *NestedManufacturer `json:"manufacturer"`
	Model        string              `json:"model"`
	Slug         string              `json:"slug"`
	URL          *string             `json:"url"`
}
