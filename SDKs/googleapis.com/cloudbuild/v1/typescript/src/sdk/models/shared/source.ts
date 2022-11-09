import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";


// Source
/** 
 * Location of the source in a supported storage service.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @Metadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;

  @Metadata({ data: "json, name=storageSourceManifest" })
  storageSourceManifest?: StorageSourceManifest;
}
