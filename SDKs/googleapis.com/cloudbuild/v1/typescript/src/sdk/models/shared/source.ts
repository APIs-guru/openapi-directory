import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";



// Source
/** 
 * Location of the source in a supported storage service.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;

  @SpeakeasyMetadata({ data: "json, name=storageSourceManifest" })
  storageSourceManifest?: StorageSourceManifest;
}
