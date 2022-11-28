import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext } from "./googledevtoolscontaineranalysisv1alpha1cloudreposourcecontext";
import { GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext } from "./googledevtoolscontaineranalysisv1alpha1gerritsourcecontext";
import { GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext } from "./googledevtoolscontaineranalysisv1alpha1gitsourcecontext";
/**
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
export declare class GoogleDevtoolsContaineranalysisV1alpha1SourceContext extends SpeakeasyBase {
    cloudRepo?: GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext;
    gerrit?: GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext;
    git?: GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext;
    labels?: Map<string, string>;
}
