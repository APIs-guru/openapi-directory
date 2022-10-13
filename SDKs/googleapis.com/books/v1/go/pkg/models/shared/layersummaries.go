package shared

type Layersummaries struct {
	Items      []Layersummary `json:"items"`
	Kind       *string        `json:"kind"`
	TotalItems *int32         `json:"totalItems"`
}
