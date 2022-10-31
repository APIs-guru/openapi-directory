package shared

type Sites struct {
	Active      []bool    `json:"Active,omitempty"`
	Description []string  `json:"Description,omitempty"`
	ID          []string  `json:"Id,omitempty"`
	Lattitude   []float64 `json:"Lattitude,omitempty"`
	Longitude   []float64 `json:"Longitude,omitempty"`
	SiteID      []string  `json:"SiteId,omitempty"`
}
