import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceRepositoryResourceZypperRepository
/** 
 * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
export class OsPolicyResourceRepositoryResourceZypperRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
