import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";



// Source
/** 
 * The location of the function source code.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;
}
