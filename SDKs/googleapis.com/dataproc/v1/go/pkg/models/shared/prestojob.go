package shared

type PrestoJob struct {
	ClientTags        []string          `json:"clientTags"`
	ContinueOnFailure *bool             `json:"continueOnFailure"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig"`
	OutputFormat      *string           `json:"outputFormat"`
	Properties        map[string]string `json:"properties"`
	QueryFileURI      *string           `json:"queryFileUri"`
	QueryList         *QueryList        `json:"queryList"`
}
