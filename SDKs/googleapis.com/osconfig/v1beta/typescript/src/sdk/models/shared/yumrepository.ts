import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YumRepository
/** 
 * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
**/
export class YumRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
