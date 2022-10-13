package shared

type PySparkBatch struct {
	ArchiveUris       []string `json:"archiveUris"`
	Args              []string `json:"args"`
	FileUris          []string `json:"fileUris"`
	JarFileUris       []string `json:"jarFileUris"`
	MainPythonFileURI *string  `json:"mainPythonFileUri"`
	PythonFileUris    []string `json:"pythonFileUris"`
}
