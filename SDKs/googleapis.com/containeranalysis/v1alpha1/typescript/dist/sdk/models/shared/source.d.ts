import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SourceContext } from "./googledevtoolscontaineranalysisv1alpha1sourcecontext";
import { StorageSource } from "./storagesource";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
/**
 * Source describes the location of the source used for the build.
**/
export declare class Source extends SpeakeasyBase {
    additionalContexts?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext[];
    artifactStorageSource?: StorageSource;
    context?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext;
    fileHashes?: Map<string, FileHashes>;
    repoSource?: RepoSource;
    storageSource?: StorageSource;
}
