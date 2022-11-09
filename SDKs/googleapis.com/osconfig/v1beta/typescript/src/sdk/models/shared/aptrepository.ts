import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED"
,    Deb = "DEB"
,    DebSrc = "DEB_SRC"
}


// AptRepository
/** 
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export class AptRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveType" })
  archiveType?: AptRepositoryArchiveTypeEnum;

  @Metadata({ data: "json, name=components" })
  components?: string[];

  @Metadata({ data: "json, name=distribution" })
  distribution?: string;

  @Metadata({ data: "json, name=gpgKey" })
  gpgKey?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
