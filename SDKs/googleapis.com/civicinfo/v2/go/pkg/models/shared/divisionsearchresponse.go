package shared

type DivisionSearchResponse struct {
	Kind    *string                `json:"kind,omitempty"`
	Results []DivisionSearchResult `json:"results,omitempty"`
}
