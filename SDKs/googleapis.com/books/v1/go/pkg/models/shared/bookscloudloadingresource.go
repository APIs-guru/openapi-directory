package shared

type BooksCloudloadingResource struct {
	Author          *string `json:"author"`
	ProcessingState *string `json:"processingState"`
	Title           *string `json:"title"`
	VolumeID        *string `json:"volumeId"`
}
