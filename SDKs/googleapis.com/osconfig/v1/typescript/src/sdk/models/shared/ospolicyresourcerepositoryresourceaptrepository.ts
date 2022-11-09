import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum {
    ArchiveTypeUnspecified = "ARCHIVE_TYPE_UNSPECIFIED"
,    Deb = "DEB"
,    DebSrc = "DEB_SRC"
}


// OsPolicyResourceRepositoryResourceAptRepository
/** 
 * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
**/
export class OsPolicyResourceRepositoryResourceAptRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveType" })
  archiveType?: OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum;

  @Metadata({ data: "json, name=components" })
  components?: string[];

  @Metadata({ data: "json, name=distribution" })
  distribution?: string;

  @Metadata({ data: "json, name=gpgKey" })
  gpgKey?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
