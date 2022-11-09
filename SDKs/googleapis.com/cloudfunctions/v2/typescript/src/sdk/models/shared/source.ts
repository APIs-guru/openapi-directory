import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";


// Source
/** 
 * The location of the function source code.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @Metadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;
}
