import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId } from "./googledevtoolscontaineranalysisv1alpha1projectrepoid";


// GoogleDevtoolsContaineranalysisV1alpha1RepoId
/** 
 * A unique identifier for a Cloud Repo.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1RepoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectRepoId" })
  projectRepoId?: GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
