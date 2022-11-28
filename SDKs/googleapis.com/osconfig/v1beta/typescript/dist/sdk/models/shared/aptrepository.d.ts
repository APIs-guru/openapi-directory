import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}
/**
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export declare class AptRepository extends SpeakeasyBase {
    archiveType?: AptRepositoryArchiveTypeEnum;
    components?: string[];
    distribution?: string;
    gpgKey?: string;
    uri?: string;
}
