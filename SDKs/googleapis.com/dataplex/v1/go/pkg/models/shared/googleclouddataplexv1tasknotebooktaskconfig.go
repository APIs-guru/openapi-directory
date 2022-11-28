package shared

// GoogleCloudDataplexV1TaskNotebookTaskConfig
// Config for running scheduled notebooks.
type GoogleCloudDataplexV1TaskNotebookTaskConfig struct {
	ArchiveUris        []string                                     `json:"archiveUris,omitempty"`
	FileUris           []string                                     `json:"fileUris,omitempty"`
	InfrastructureSpec *GoogleCloudDataplexV1TaskInfrastructureSpec `json:"infrastructureSpec,omitempty"`
	Notebook           *string                                      `json:"notebook,omitempty"`
}
