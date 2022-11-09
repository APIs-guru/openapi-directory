import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId
/** 
 * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=repoName" })
  repoName?: string;
}
