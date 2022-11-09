import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";
import { GoogleDevtoolsContaineranalysisV1alpha1RepoId } from "./googledevtoolscontaineranalysisv1alpha1repoid";


// GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext
/** 
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasContext" })
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;

  @Metadata({ data: "json, name=repoId" })
  repoId?: GoogleDevtoolsContaineranalysisV1alpha1RepoId;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
