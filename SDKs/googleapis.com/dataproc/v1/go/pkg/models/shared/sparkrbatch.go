package shared

type SparkRBatch struct {
	ArchiveUris  []string `json:"archiveUris"`
	Args         []string `json:"args"`
	FileUris     []string `json:"fileUris"`
	MainRFileURI *string  `json:"mainRFileUri"`
}
