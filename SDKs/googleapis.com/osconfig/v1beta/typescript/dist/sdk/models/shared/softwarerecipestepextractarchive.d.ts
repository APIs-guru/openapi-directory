import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SoftwareRecipeStepExtractArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Tar = "TAR",
    TarGzip = "TAR_GZIP",
    TarBzip = "TAR_BZIP",
    TarLzma = "TAR_LZMA",
    TarXz = "TAR_XZ",
    Zip = "ZIP"
}
/**
 * Extracts an archive of the type specified in the specified directory.
**/
export declare class SoftwareRecipeStepExtractArchive extends SpeakeasyBase {
    artifactId?: string;
    destination?: string;
    type?: SoftwareRecipeStepExtractArchiveTypeEnum;
}
