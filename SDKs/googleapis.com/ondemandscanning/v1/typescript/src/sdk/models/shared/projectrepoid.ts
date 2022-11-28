import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectRepoId
/** 
 * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
**/
export class ProjectRepoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=repoName" })
  repoName?: string;
}
