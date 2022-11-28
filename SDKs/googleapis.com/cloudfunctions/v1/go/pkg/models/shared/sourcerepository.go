package shared

// SourceRepository
// Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
type SourceRepository struct {
	DeployedURL *string `json:"deployedUrl,omitempty"`
	URL         *string `json:"url,omitempty"`
}

// SourceRepositoryInput
// Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
type SourceRepositoryInput struct {
	URL *string `json:"url,omitempty"`
}
