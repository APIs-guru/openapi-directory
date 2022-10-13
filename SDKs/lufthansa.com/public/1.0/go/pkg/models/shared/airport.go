package shared

type AirportNames struct {
	Name []Name `json:"Name"`
}

type AirportPosition struct {
	Coordinate *Coordinate `json:"Coordinate"`
}

type Airport struct {
	AirportCode  *string          `json:"AirportCode"`
	CityCode     *string          `json:"CityCode"`
	CountryCode  *string          `json:"CountryCode"`
	LocationType *string          `json:"LocationType"`
	Names        *AirportNames    `json:"Names"`
	Position     *AirportPosition `json:"Position"`
	TimeZoneID   *string          `json:"TimeZoneId"`
	UtcOffset    *float32         `json:"UtcOffset"`
}
