import { SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";
/**
 * Location of the source in a supported storage service.
**/
export declare class Source extends SpeakeasyBase {
    repoSource?: RepoSource;
    storageSource?: StorageSource;
    storageSourceManifest?: StorageSourceManifest;
}
