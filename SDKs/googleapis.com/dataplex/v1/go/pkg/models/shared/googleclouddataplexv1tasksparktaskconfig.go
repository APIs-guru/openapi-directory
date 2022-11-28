package shared

// GoogleCloudDataplexV1TaskSparkTaskConfig
// User-specified config for running a Spark task.
type GoogleCloudDataplexV1TaskSparkTaskConfig struct {
	ArchiveUris        []string                                     `json:"archiveUris,omitempty"`
	FileUris           []string                                     `json:"fileUris,omitempty"`
	InfrastructureSpec *GoogleCloudDataplexV1TaskInfrastructureSpec `json:"infrastructureSpec,omitempty"`
	MainClass          *string                                      `json:"mainClass,omitempty"`
	MainJarFileURI     *string                                      `json:"mainJarFileUri,omitempty"`
	PythonScriptFile   *string                                      `json:"pythonScriptFile,omitempty"`
	SQLScript          *string                                      `json:"sqlScript,omitempty"`
	SQLScriptFile      *string                                      `json:"sqlScriptFile,omitempty"`
}
