package shared

type OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum string

const (
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb                    OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB"
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc                 OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB_SRC"
)

// OsPolicyResourceRepositoryResourceAptRepository
// Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
type OsPolicyResourceRepositoryResourceAptRepository struct {
	ArchiveType  *OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum `json:"archiveType,omitempty"`
	Components   []string                                                        `json:"components,omitempty"`
	Distribution *string                                                         `json:"distribution,omitempty"`
	GpgKey       *string                                                         `json:"gpgKey,omitempty"`
	URI          *string                                                         `json:"uri,omitempty"`
}
