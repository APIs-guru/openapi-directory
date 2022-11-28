package shared

// OsPolicyResourceRepositoryResourceYumRepository
// Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
type OsPolicyResourceRepositoryResourceYumRepository struct {
	BaseURL     *string  `json:"baseUrl,omitempty"`
	DisplayName *string  `json:"displayName,omitempty"`
	GpgKeys     []string `json:"gpgKeys,omitempty"`
	ID          *string  `json:"id,omitempty"`
}
