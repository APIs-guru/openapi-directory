package shared

type TrinoJob struct {
	ClientTags        []string          `json:"clientTags,omitempty"`
	ContinueOnFailure *bool             `json:"continueOnFailure,omitempty"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig,omitempty"`
	OutputFormat      *string           `json:"outputFormat,omitempty"`
	Properties        map[string]string `json:"properties,omitempty"`
	QueryFileURI      *string           `json:"queryFileUri,omitempty"`
	QueryList         *QueryList        `json:"queryList,omitempty"`
}
