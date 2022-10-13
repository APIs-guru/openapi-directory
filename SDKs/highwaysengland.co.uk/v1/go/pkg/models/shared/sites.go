package shared

type Sites struct {
	Active      []bool    `json:"Active"`
	Description []string  `json:"Description"`
	ID          []string  `json:"Id"`
	Lattitude   []float64 `json:"Lattitude"`
	Longitude   []float64 `json:"Longitude"`
	SiteID      []string  `json:"SiteId"`
}
