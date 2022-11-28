import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}
/**
 * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export declare class OsPolicyResourceRepositoryResourceAptRepository extends SpeakeasyBase {
    archiveType?: OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;
    components?: string[];
    distribution?: string;
    gpgKey?: string;
    uri?: string;
}
