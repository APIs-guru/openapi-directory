package shared

type LocationTypeEnum string

const (
	LocationTypeEnumLocationTypeUnspecified LocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
	LocationTypeEnumZone                    LocationTypeEnum = "ZONE"
	LocationTypeEnumRegion                  LocationTypeEnum = "REGION"
)

// Location
// Location returns the location name, and if the location is recommended for GKE cluster scheduling.
type Location struct {
	Name        *string           `json:"name,omitempty"`
	Recommended *bool             `json:"recommended,omitempty"`
	Type        *LocationTypeEnum `json:"type,omitempty"`
}
