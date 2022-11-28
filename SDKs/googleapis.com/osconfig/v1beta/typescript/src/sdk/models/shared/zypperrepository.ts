import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZypperRepository
/** 
 * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
export class ZypperRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
