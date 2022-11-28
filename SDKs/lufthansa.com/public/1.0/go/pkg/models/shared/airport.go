package shared

// AirportNames
// Container for airport names.
type AirportNames struct {
	Name []Name `json:"Name,omitempty"`
}

// AirportPosition
// Physical location of an airport. This data section is optional and therefore not always present.
type AirportPosition struct {
	Coordinate *Coordinate `json:"Coordinate,omitempty"`
}

// Airport
// Array of all available airports or one airport matching the request.
type Airport struct {
	AirportCode  *string          `json:"AirportCode,omitempty"`
	CityCode     *string          `json:"CityCode,omitempty"`
	CountryCode  *string          `json:"CountryCode,omitempty"`
	LocationType *string          `json:"LocationType,omitempty"`
	Names        *AirportNames    `json:"Names,omitempty"`
	Position     *AirportPosition `json:"Position,omitempty"`
	TimeZoneID   *string          `json:"TimeZoneId,omitempty"`
	UtcOffset    *float32         `json:"UtcOffset,omitempty"`
}
