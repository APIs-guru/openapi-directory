package shared

type GoogleCloudDataplexV1TaskNotebookTaskConfig struct {
	ArchiveUris        []string                                     `json:"archiveUris"`
	FileUris           []string                                     `json:"fileUris"`
	InfrastructureSpec *GoogleCloudDataplexV1TaskInfrastructureSpec `json:"infrastructureSpec"`
	Notebook           *string                                      `json:"notebook"`
}
