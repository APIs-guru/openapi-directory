package shared

type SparkJob struct {
	ArchiveUris    []string          `json:"archiveUris,omitempty"`
	Args           []string          `json:"args,omitempty"`
	FileUris       []string          `json:"fileUris,omitempty"`
	JarFileUris    []string          `json:"jarFileUris,omitempty"`
	LoggingConfig  *LoggingConfig    `json:"loggingConfig,omitempty"`
	MainClass      *string           `json:"mainClass,omitempty"`
	MainJarFileURI *string           `json:"mainJarFileUri,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
}
