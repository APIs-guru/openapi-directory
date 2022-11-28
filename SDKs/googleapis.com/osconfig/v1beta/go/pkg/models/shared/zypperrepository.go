package shared

// ZypperRepository
// Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
type ZypperRepository struct {
	BaseURL     *string  `json:"baseUrl,omitempty"`
	DisplayName *string  `json:"displayName,omitempty"`
	GpgKeys     []string `json:"gpgKeys,omitempty"`
	ID          *string  `json:"id,omitempty"`
}
