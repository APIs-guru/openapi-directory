package shared

// YumRepository
// Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
type YumRepository struct {
	BaseURL     *string  `json:"baseUrl,omitempty"`
	DisplayName *string  `json:"displayName,omitempty"`
	GpgKeys     []string `json:"gpgKeys,omitempty"`
	ID          *string  `json:"id,omitempty"`
}
