package shared

type AptRepositoryArchiveTypeEnum string

const (
	AptRepositoryArchiveTypeEnumArchiveTypeUnspecified AptRepositoryArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
	AptRepositoryArchiveTypeEnumDeb                    AptRepositoryArchiveTypeEnum = "DEB"
	AptRepositoryArchiveTypeEnumDebSrc                 AptRepositoryArchiveTypeEnum = "DEB_SRC"
)

type AptRepository struct {
	ArchiveType  *AptRepositoryArchiveTypeEnum `json:"archiveType,omitempty"`
	Components   []string                      `json:"components,omitempty"`
	Distribution *string                       `json:"distribution,omitempty"`
	GpgKey       *string                       `json:"gpgKey,omitempty"`
	URI          *string                       `json:"uri,omitempty"`
}
