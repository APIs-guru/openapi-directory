import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId } from "./googledevtoolscontaineranalysisv1alpha1projectrepoid";



// GoogleDevtoolsContaineranalysisV1alpha1RepoId
/** 
 * A unique identifier for a Cloud Repo.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1RepoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectRepoId" })
  projectRepoId?: GoogleDevtoolsContaineranalysisV1alpha1ProjectRepoId;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
