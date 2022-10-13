package shared

type GeoCoords struct {
	Lat         *float64 `json:"lat"`
	Lng         *float64 `json:"lng"`
	TimeUpdated *string  `json:"time_updated"`
}
