package shared

type PySparkJob struct {
	ArchiveUris       []string          `json:"archiveUris"`
	Args              []string          `json:"args"`
	FileUris          []string          `json:"fileUris"`
	JarFileUris       []string          `json:"jarFileUris"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig"`
	MainPythonFileURI *string           `json:"mainPythonFileUri"`
	Properties        map[string]string `json:"properties"`
	PythonFileUris    []string          `json:"pythonFileUris"`
}
