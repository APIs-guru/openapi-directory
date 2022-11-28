import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";
import { GoogleDevtoolsContaineranalysisV1alpha1RepoId } from "./googledevtoolscontaineranalysisv1alpha1repoid";
/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export declare class GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext extends SpeakeasyBase {
    aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
    repoId?: GoogleDevtoolsContaineranalysisV1alpha1RepoId;
    revisionId?: string;
}
