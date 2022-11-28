import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED",
    Deb = "DEB",
    DebSrc = "DEB_SRC"
}


// OsPolicyResourceRepositoryResourceAptRepository
/** 
 * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export class OsPolicyResourceRepositoryResourceAptRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveType" })
  archiveType?: OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: string[];

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: string;

  @SpeakeasyMetadata({ data: "json, name=gpgKey" })
  gpgKey?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
