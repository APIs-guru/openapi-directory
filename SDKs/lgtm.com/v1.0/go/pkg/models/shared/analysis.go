package shared

type Analysis struct {
	CommitID   *string         `json:"commit-id"`
	ID         *string         `json:"id"`
	Languages  []LanguageStats `json:"languages"`
	LogURL     *string         `json:"log-url"`
	Project    *Project        `json:"project"`
	ResultsURL *string         `json:"results-url"`
}
