package shared

// SourceCrowdingConfig
// Set search results crowding limits. Crowding is a situation in which multiple results from the same source or host "crowd out" other results, diminishing the quality of search for users. To foster better search quality and source diversity in search results, you can set a condition to reduce repetitive results by source.
type SourceCrowdingConfig struct {
	NumResults     *int32 `json:"numResults,omitempty"`
	NumSuggestions *int32 `json:"numSuggestions,omitempty"`
}
