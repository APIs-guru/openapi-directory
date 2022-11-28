import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";
import { GoogleDevtoolsContaineranalysisV1alpha1RepoId } from "./googledevtoolscontaineranalysisv1alpha1repoid";



// GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext
/** 
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasContext" })
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;

  @SpeakeasyMetadata({ data: "json, name=repoId" })
  repoId?: GoogleDevtoolsContaineranalysisV1alpha1RepoId;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
