import { SpeakeasyBase } from "../../../internal/utils";
import { NamespacedGkeDeploymentTarget } from "./namespacedgkedeploymenttarget";
import { GkeNodePoolTarget } from "./gkenodepooltarget";
/**
 * The cluster's GKE config.
**/
export declare class GkeClusterConfig extends SpeakeasyBase {
    gkeClusterTarget?: string;
    namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;
    nodePoolTarget?: GkeNodePoolTarget[];
}
