package shared

// OsPolicyResourceRepositoryResourceGooRepository
// Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
type OsPolicyResourceRepositoryResourceGooRepository struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}
