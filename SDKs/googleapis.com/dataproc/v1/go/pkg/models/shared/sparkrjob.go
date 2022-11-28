package shared

// SparkRJob
// A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
type SparkRJob struct {
	ArchiveUris   []string          `json:"archiveUris,omitempty"`
	Args          []string          `json:"args,omitempty"`
	FileUris      []string          `json:"fileUris,omitempty"`
	LoggingConfig *LoggingConfig    `json:"loggingConfig,omitempty"`
	MainRFileURI  *string           `json:"mainRFileUri,omitempty"`
	Properties    map[string]string `json:"properties,omitempty"`
}
