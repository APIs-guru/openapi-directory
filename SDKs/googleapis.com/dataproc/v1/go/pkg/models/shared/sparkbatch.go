package shared

type SparkBatch struct {
	ArchiveUris    []string `json:"archiveUris"`
	Args           []string `json:"args"`
	FileUris       []string `json:"fileUris"`
	JarFileUris    []string `json:"jarFileUris"`
	MainClass      *string  `json:"mainClass"`
	MainJarFileURI *string  `json:"mainJarFileUri"`
}
