import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";


// SourceProvenance
/** 
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export class SourceProvenance extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileHashes", elemType: shared.FileHashes })
  fileHashes?: Map<string, FileHashes>;

  @Metadata({ data: "json, name=resolvedRepoSource" })
  resolvedRepoSource?: RepoSource;

  @Metadata({ data: "json, name=resolvedStorageSource" })
  resolvedStorageSource?: StorageSource;

  @Metadata({ data: "json, name=resolvedStorageSourceManifest" })
  resolvedStorageSourceManifest?: StorageSourceManifest;
}
