package shared

type LocationLocationTypeEnum string

const (
	LocationLocationTypeEnumLocationTypeUnspecified LocationLocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
	LocationLocationTypeEnumCountry                 LocationLocationTypeEnum = "COUNTRY"
	LocationLocationTypeEnumAdministrativeArea      LocationLocationTypeEnum = "ADMINISTRATIVE_AREA"
	LocationLocationTypeEnumSubAdministrativeArea   LocationLocationTypeEnum = "SUB_ADMINISTRATIVE_AREA"
	LocationLocationTypeEnumLocality                LocationLocationTypeEnum = "LOCALITY"
	LocationLocationTypeEnumPostalCode              LocationLocationTypeEnum = "POSTAL_CODE"
	LocationLocationTypeEnumSubLocality             LocationLocationTypeEnum = "SUB_LOCALITY"
	LocationLocationTypeEnumSubLocality1            LocationLocationTypeEnum = "SUB_LOCALITY_1"
	LocationLocationTypeEnumSubLocality2            LocationLocationTypeEnum = "SUB_LOCALITY_2"
	LocationLocationTypeEnumNeighborhood            LocationLocationTypeEnum = "NEIGHBORHOOD"
	LocationLocationTypeEnumStreetAddress           LocationLocationTypeEnum = "STREET_ADDRESS"
)

type Location struct {
	LatLng        *LatLng                   `json:"latLng,omitempty"`
	LocationType  *LocationLocationTypeEnum `json:"locationType,omitempty"`
	PostalAddress *PostalAddress            `json:"postalAddress,omitempty"`
	RadiusMiles   *float64                  `json:"radiusMiles,omitempty"`
}
