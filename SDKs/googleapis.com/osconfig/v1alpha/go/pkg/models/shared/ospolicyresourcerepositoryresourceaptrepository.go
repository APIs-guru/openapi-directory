package shared




type OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum string

const (
    OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumArchiveTypeUnspecified OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDeb OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB"
OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnumDebSrc OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum = "DEB_SRC"
)


type OsPolicyResourceRepositoryResourceAptRepository struct {
    ArchiveType *OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum `json:"archiveType,omitempty"`
    Components []string `json:"components,omitempty"`
    Distribution *string `json:"distribution,omitempty"`
    GpgKey *string `json:"gpgKey,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

