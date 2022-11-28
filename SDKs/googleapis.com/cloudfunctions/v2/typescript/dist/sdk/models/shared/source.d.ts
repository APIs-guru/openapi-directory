import { SpeakeasyBase } from "../../../internal/utils";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
/**
 * The location of the function source code.
**/
export declare class Source extends SpeakeasyBase {
    repoSource?: RepoSource;
    storageSource?: StorageSource;
}
