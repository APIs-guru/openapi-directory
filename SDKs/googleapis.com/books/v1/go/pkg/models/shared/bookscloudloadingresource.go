package shared

type BooksCloudloadingResource struct {
	Author          *string `json:"author,omitempty"`
	ProcessingState *string `json:"processingState,omitempty"`
	Title           *string `json:"title,omitempty"`
	VolumeID        *string `json:"volumeId,omitempty"`
}
