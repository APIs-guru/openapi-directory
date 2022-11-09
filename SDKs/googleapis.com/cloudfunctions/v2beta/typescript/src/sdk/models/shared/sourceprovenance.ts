import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";


// SourceProvenance
/** 
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export class SourceProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolvedRepoSource" })
  resolvedRepoSource?: RepoSource;

  @Metadata({ data: "json, name=resolvedStorageSource" })
  resolvedStorageSource?: StorageSource;
}
