package shared

type OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum string

const (
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb                    OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB"
	OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc                 OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB_SRC"
)

type OsPolicyResourceRepositoryResourceAptRepository struct {
	ArchiveType  *OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum `json:"archiveType"`
	Components   []string                                                        `json:"components"`
	Distribution *string                                                         `json:"distribution"`
	GpgKey       *string                                                         `json:"gpgKey"`
	URI          *string                                                         `json:"uri"`
}
