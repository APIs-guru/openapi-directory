import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceRepositoryResourceYumRepository
/** 
 * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
**/
export class OsPolicyResourceRepositoryResourceYumRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
