package shared

// GooRepository
// Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.
type GooRepository struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}
