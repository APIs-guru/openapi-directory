package shared

type SparkRJob struct {
	ArchiveUris   []string          `json:"archiveUris"`
	Args          []string          `json:"args"`
	FileUris      []string          `json:"fileUris"`
	LoggingConfig *LoggingConfig    `json:"loggingConfig"`
	MainRFileURI  *string           `json:"mainRFileUri"`
	Properties    map[string]string `json:"properties"`
}
