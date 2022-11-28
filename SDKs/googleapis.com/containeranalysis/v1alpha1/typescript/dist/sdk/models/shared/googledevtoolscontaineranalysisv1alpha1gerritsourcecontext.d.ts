import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";
/**
 * A SourceContext referring to a Gerrit project.
**/
export declare class GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext extends SpeakeasyBase {
    aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;
    gerritProject?: string;
    hostUri?: string;
    revisionId?: string;
}
