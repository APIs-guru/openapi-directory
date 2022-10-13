package shared

type SparkJob struct {
	ArchiveUris    []string          `json:"archiveUris"`
	Args           []string          `json:"args"`
	FileUris       []string          `json:"fileUris"`
	JarFileUris    []string          `json:"jarFileUris"`
	LoggingConfig  *LoggingConfig    `json:"loggingConfig"`
	MainClass      *string           `json:"mainClass"`
	MainJarFileURI *string           `json:"mainJarFileUri"`
	Properties     map[string]string `json:"properties"`
}
