import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SoftwareRecipeStepExtractArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Tar = "TAR",
    TarGzip = "TAR_GZIP",
    TarBzip = "TAR_BZIP",
    TarLzma = "TAR_LZMA",
    TarXz = "TAR_XZ",
    Zip = "ZIP"
}


// SoftwareRecipeStepExtractArchive
/** 
 * Extracts an archive of the type specified in the specified directory.
**/
export class SoftwareRecipeStepExtractArchive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SoftwareRecipeStepExtractArchiveTypeEnum;
}
