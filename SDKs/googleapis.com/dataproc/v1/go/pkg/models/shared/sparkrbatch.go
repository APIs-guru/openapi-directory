package shared

// SparkRBatch
// A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
type SparkRBatch struct {
	ArchiveUris  []string `json:"archiveUris,omitempty"`
	Args         []string `json:"args,omitempty"`
	FileUris     []string `json:"fileUris,omitempty"`
	MainRFileURI *string  `json:"mainRFileUri,omitempty"`
}
