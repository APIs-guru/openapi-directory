package shared

type LocationTypeEnum string

const (
	LocationTypeEnumLocationTypeUnspecified LocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
	LocationTypeEnumZone                    LocationTypeEnum = "ZONE"
	LocationTypeEnumRegion                  LocationTypeEnum = "REGION"
)

type Location struct {
	Name        *string           `json:"name"`
	Recommended *bool             `json:"recommended"`
	Type        *LocationTypeEnum `json:"type"`
}
