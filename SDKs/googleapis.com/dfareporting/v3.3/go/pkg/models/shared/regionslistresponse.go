package shared

type RegionsListResponse struct {
	Kind    *string  `json:"kind"`
	Regions []Region `json:"regions"`
}
