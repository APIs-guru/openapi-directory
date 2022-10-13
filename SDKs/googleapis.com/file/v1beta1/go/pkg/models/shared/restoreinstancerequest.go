package shared

type RestoreInstanceRequest struct {
	FileShare      *string `json:"fileShare"`
	SourceBackup   *string `json:"sourceBackup"`
	SourceSnapshot *string `json:"sourceSnapshot"`
}
