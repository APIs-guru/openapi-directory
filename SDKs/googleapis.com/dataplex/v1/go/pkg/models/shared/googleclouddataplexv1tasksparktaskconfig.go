package shared

type GoogleCloudDataplexV1TaskSparkTaskConfig struct {
	ArchiveUris        []string                                     `json:"archiveUris"`
	FileUris           []string                                     `json:"fileUris"`
	InfrastructureSpec *GoogleCloudDataplexV1TaskInfrastructureSpec `json:"infrastructureSpec"`
	MainClass          *string                                      `json:"mainClass"`
	MainJarFileURI     *string                                      `json:"mainJarFileUri"`
	PythonScriptFile   *string                                      `json:"pythonScriptFile"`
	SQLScript          *string                                      `json:"sqlScript"`
	SQLScriptFile      *string                                      `json:"sqlScriptFile"`
}
