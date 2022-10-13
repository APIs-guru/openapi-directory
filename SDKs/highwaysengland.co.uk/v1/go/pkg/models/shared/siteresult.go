package shared

type SiteResult struct {
	Description *string  `json:"Description"`
	ID          *string  `json:"Id"`
	Latitude    *float64 `json:"Latitude"`
	Longitude   *float64 `json:"Longitude"`
	Name        *string  `json:"Name"`
	Status      *string  `json:"Status"`
}
