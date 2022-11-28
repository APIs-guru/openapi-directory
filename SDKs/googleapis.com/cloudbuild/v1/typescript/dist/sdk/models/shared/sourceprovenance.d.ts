import { SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export declare class SourceProvenance extends SpeakeasyBase {
    fileHashes?: Map<string, FileHashes>;
    resolvedRepoSource?: RepoSource;
    resolvedStorageSource?: StorageSource;
    resolvedStorageSourceManifest?: StorageSourceManifest;
}
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export declare class SourceProvenanceInput extends SpeakeasyBase {
    resolvedRepoSource?: RepoSource;
    resolvedStorageSource?: StorageSource;
    resolvedStorageSourceManifest?: StorageSourceManifest;
}
