package shared

type SoftwareRecipeStepExtractArchiveTypeEnum string

const (
	SoftwareRecipeStepExtractArchiveTypeEnumArchiveTypeUnspecified SoftwareRecipeStepExtractArchiveTypeEnum = "ARCHIVE_TYPE_UNSPECIFIED"
	SoftwareRecipeStepExtractArchiveTypeEnumTar                    SoftwareRecipeStepExtractArchiveTypeEnum = "TAR"
	SoftwareRecipeStepExtractArchiveTypeEnumTarGzip                SoftwareRecipeStepExtractArchiveTypeEnum = "TAR_GZIP"
	SoftwareRecipeStepExtractArchiveTypeEnumTarBzip                SoftwareRecipeStepExtractArchiveTypeEnum = "TAR_BZIP"
	SoftwareRecipeStepExtractArchiveTypeEnumTarLzma                SoftwareRecipeStepExtractArchiveTypeEnum = "TAR_LZMA"
	SoftwareRecipeStepExtractArchiveTypeEnumTarXz                  SoftwareRecipeStepExtractArchiveTypeEnum = "TAR_XZ"
	SoftwareRecipeStepExtractArchiveTypeEnumZip                    SoftwareRecipeStepExtractArchiveTypeEnum = "ZIP"
)

type SoftwareRecipeStepExtractArchive struct {
	ArtifactID  *string                                   `json:"artifactId"`
	Destination *string                                   `json:"destination"`
	Type        *SoftwareRecipeStepExtractArchiveTypeEnum `json:"type"`
}
