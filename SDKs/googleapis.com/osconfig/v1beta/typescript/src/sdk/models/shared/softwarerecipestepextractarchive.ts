import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SoftwareRecipeStepExtractArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED"
,    Tar = "TAR"
,    TarGzip = "TAR_GZIP"
,    TarBzip = "TAR_BZIP"
,    TarLzma = "TAR_LZMA"
,    TarXz = "TAR_XZ"
,    Zip = "ZIP"
}


// SoftwareRecipeStepExtractArchive
/** 
 * Extracts an archive of the type specified in the specified directory.
**/
export class SoftwareRecipeStepExtractArchive extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=type" })
  type?: SoftwareRecipeStepExtractArchiveTypeEnum;
}
