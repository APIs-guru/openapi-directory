package shared

type AirportNames struct {
	Name []Name `json:"Name,omitempty"`
}

type AirportPosition struct {
	Coordinate *Coordinate `json:"Coordinate,omitempty"`
}

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
