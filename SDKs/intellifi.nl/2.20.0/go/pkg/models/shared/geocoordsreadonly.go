package shared

type GeoCoordsReadOnly struct {
	Lat         *float64 `json:"lat"`
	Lng         *float64 `json:"lng"`
	TimeUpdated *string  `json:"time_updated"`
}
