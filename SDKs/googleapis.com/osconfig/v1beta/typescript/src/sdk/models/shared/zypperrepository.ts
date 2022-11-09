import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZypperRepository
/** 
 * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
export class ZypperRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gpgKeys" })
  gpgKeys?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;
}
