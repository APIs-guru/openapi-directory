package shared

// TrinoJob
// A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
type TrinoJob struct {
	ClientTags        []string          `json:"clientTags,omitempty"`
	ContinueOnFailure *bool             `json:"continueOnFailure,omitempty"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig,omitempty"`
	OutputFormat      *string           `json:"outputFormat,omitempty"`
	Properties        map[string]string `json:"properties,omitempty"`
	QueryFileURI      *string           `json:"queryFileUri,omitempty"`
	QueryList         *QueryList        `json:"queryList,omitempty"`
}
