import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourceRepositoryResourceYumRepository
/** 
 * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
**/
export class OsPolicyResourceRepositoryResourceYumRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
