package shared

// PrestoJob
// A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
type PrestoJob struct {
	ClientTags        []string          `json:"clientTags,omitempty"`
	ContinueOnFailure *bool             `json:"continueOnFailure,omitempty"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig,omitempty"`
	OutputFormat      *string           `json:"outputFormat,omitempty"`
	Properties        map[string]string `json:"properties,omitempty"`
	QueryFileURI      *string           `json:"queryFileUri,omitempty"`
	QueryList         *QueryList        `json:"queryList,omitempty"`
}
