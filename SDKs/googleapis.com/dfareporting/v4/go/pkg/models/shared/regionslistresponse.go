package shared

type RegionsListResponse struct {
	Kind    *string  `json:"kind,omitempty"`
	Regions []Region `json:"regions,omitempty"`
}
