import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
export declare class SourceProvenance extends SpeakeasyBase {
    resolvedRepoSource?: RepoSource;
    resolvedStorageSource?: StorageSource;
}
