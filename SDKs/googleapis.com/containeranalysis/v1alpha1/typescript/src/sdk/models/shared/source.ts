import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1SourceContext } from "./googledevtoolscontaineranalysisv1alpha1sourcecontext";
import { StorageSource } from "./storagesource";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";



// Source
/** 
 * Source describes the location of the source used for the build.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalContexts", elemType: GoogleDevtoolsContaineranalysisV1alpha1SourceContext })
  additionalContexts?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext[];

  @SpeakeasyMetadata({ data: "json, name=artifactStorageSource" })
  artifactStorageSource?: StorageSource;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext;

  @SpeakeasyMetadata({ data: "json, name=fileHashes", elemType: FileHashes })
  fileHashes?: Map<string, FileHashes>;

  @SpeakeasyMetadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @SpeakeasyMetadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;
}
