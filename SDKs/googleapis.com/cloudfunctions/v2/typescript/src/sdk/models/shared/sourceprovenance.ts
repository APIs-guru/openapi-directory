import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";



// SourceProvenance
/** 
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export class SourceProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolvedRepoSource" })
  resolvedRepoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedStorageSource" })
  resolvedStorageSource?: StorageSource;
}
