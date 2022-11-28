package shared

// OsPolicyResourceRepositoryResourceZypperRepository
// Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
type OsPolicyResourceRepositoryResourceZypperRepository struct {
	BaseURL     *string  `json:"baseUrl,omitempty"`
	DisplayName *string  `json:"displayName,omitempty"`
	GpgKeys     []string `json:"gpgKeys,omitempty"`
	ID          *string  `json:"id,omitempty"`
}
