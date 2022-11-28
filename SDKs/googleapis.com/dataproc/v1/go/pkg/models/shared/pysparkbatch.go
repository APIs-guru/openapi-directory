package shared

// PySparkBatch
// A configuration for running an Apache PySpark (https://spark.apache.org/docs/latest/api/python/getting_started/quickstart.html) batch workload.
type PySparkBatch struct {
	ArchiveUris       []string `json:"archiveUris,omitempty"`
	Args              []string `json:"args,omitempty"`
	FileUris          []string `json:"fileUris,omitempty"`
	JarFileUris       []string `json:"jarFileUris,omitempty"`
	MainPythonFileURI *string  `json:"mainPythonFileUri,omitempty"`
	PythonFileUris    []string `json:"pythonFileUris,omitempty"`
}
