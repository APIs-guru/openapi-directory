package shared

// RegionsListResponse
// Region List Response
type RegionsListResponse struct {
	Kind    *string  `json:"kind,omitempty"`
	Regions []Region `json:"regions,omitempty"`
}
