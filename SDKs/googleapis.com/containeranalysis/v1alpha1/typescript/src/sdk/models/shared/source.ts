import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleDevtoolsContaineranalysisV1alpha1SourceContext } from "./googledevtoolscontaineranalysisv1alpha1sourcecontext";
import { StorageSource } from "./storagesource";
import { GoogleDevtoolsContaineranalysisV1alpha1SourceContext } from "./googledevtoolscontaineranalysisv1alpha1sourcecontext";
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";


// Source
/** 
 * Source describes the location of the source used for the build.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalContexts", elemType: shared.GoogleDevtoolsContaineranalysisV1alpha1SourceContext })
  additionalContexts?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext[];

  @Metadata({ data: "json, name=artifactStorageSource" })
  artifactStorageSource?: StorageSource;

  @Metadata({ data: "json, name=context" })
  context?: GoogleDevtoolsContaineranalysisV1alpha1SourceContext;

  @Metadata({ data: "json, name=fileHashes", elemType: shared.FileHashes })
  fileHashes?: Map<string, FileHashes>;

  @Metadata({ data: "json, name=repoSource" })
  repoSource?: RepoSource;

  @Metadata({ data: "json, name=storageSource" })
  storageSource?: StorageSource;
}
