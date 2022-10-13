package shared

type DivisionSearchResponse struct {
	Kind    *string                `json:"kind"`
	Results []DivisionSearchResult `json:"results"`
}
