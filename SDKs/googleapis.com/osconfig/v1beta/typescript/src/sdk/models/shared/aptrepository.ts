import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}


// AptRepository
/** 
 * Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export class AptRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveType" })
  archiveType?: AptRepositoryArchiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: string[];

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: string;

  @SpeakeasyMetadata({ data: "json, name=gpgKey" })
  gpgKey?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
