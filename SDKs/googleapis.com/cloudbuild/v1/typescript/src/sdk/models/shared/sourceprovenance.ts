import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";



// SourceProvenance
/** 
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export class SourceProvenance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileHashes", elemType: FileHashes })
  fileHashes?: Map<string, FileHashes>;

  @SpeakeasyMetadata({ data: "json, name=resolvedRepoSource" })
  resolvedRepoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedStorageSource" })
  resolvedStorageSource?: StorageSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedStorageSourceManifest" })
  resolvedStorageSourceManifest?: StorageSourceManifest;
}


// SourceProvenanceInput
/** 
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export class SourceProvenanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolvedRepoSource" })
  resolvedRepoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedStorageSource" })
  resolvedStorageSource?: StorageSource;

  @SpeakeasyMetadata({ data: "json, name=resolvedStorageSourceManifest" })
  resolvedStorageSourceManifest?: StorageSourceManifest;
}
