package shared

type AptRepositoryArchiveTypeEnum string

const (
	AptRepositoryArchiveTypeEnumArchiveTypeUnspecified AptRepositoryArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
	AptRepositoryArchiveTypeEnumDeb                    AptRepositoryArchiveTypeEnum = "DEB"
	AptRepositoryArchiveTypeEnumDebSrc                 AptRepositoryArchiveTypeEnum = "DEB_SRC"
)

type AptRepository struct {
	ArchiveType  *AptRepositoryArchiveTypeEnum `json:"archiveType"`
	Components   []string                      `json:"components"`
	Distribution *string                       `json:"distribution"`
	GpgKey       *string                       `json:"gpgKey"`
	URI          *string                       `json:"uri"`
}
