package shared

type Analysis struct {
	CommitID   *string         `json:"commit-id,omitempty"`
	ID         *string         `json:"id,omitempty"`
	Languages  []LanguageStats `json:"languages,omitempty"`
	LogURL     *string         `json:"log-url,omitempty"`
	Project    *Project        `json:"project,omitempty"`
	ResultsURL *string         `json:"results-url,omitempty"`
}
