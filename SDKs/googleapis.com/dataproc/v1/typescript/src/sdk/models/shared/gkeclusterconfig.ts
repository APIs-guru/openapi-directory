import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespacedGkeDeploymentTarget } from "./namespacedgkedeploymenttarget";
import { GkeNodePoolTarget } from "./gkenodepooltarget";



// GkeClusterConfig
/** 
 * The cluster's GKE config.
**/
export class GkeClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gkeClusterTarget" })
  gkeClusterTarget?: string;

  @SpeakeasyMetadata({ data: "json, name=namespacedGkeDeploymentTarget" })
  namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;

  @SpeakeasyMetadata({ data: "json, name=nodePoolTarget", elemType: GkeNodePoolTarget })
  nodePoolTarget?: GkeNodePoolTarget[];
}
