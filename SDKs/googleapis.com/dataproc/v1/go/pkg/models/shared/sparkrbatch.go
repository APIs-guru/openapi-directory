package shared

type SparkRBatch struct {
	ArchiveUris  []string `json:"archiveUris,omitempty"`
	Args         []string `json:"args,omitempty"`
	FileUris     []string `json:"fileUris,omitempty"`
	MainRFileURI *string  `json:"mainRFileUri,omitempty"`
}
