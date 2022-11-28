package shared

// DivisionSearchResponse
// The result of a division search query.
type DivisionSearchResponse struct {
	Kind    *string                `json:"kind,omitempty"`
	Results []DivisionSearchResult `json:"results,omitempty"`
}
