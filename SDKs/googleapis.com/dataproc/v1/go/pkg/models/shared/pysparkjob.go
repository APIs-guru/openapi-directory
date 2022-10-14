package shared

type PySparkJob struct {
	ArchiveUris       []string          `json:"archiveUris,omitempty"`
	Args              []string          `json:"args,omitempty"`
	FileUris          []string          `json:"fileUris,omitempty"`
	JarFileUris       []string          `json:"jarFileUris,omitempty"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig,omitempty"`
	MainPythonFileURI *string           `json:"mainPythonFileUri,omitempty"`
	Properties        map[string]string `json:"properties,omitempty"`
	PythonFileUris    []string          `json:"pythonFileUris,omitempty"`
}
