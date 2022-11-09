import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamespacedGkeDeploymentTarget } from "./namespacedgkedeploymenttarget";
import { GkeNodePoolTarget } from "./gkenodepooltarget";


// GkeClusterConfig
/** 
 * The cluster's GKE config.
**/
export class GkeClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gkeClusterTarget" })
  gkeClusterTarget?: string;

  @Metadata({ data: "json, name=namespacedGkeDeploymentTarget" })
  namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;

  @Metadata({ data: "json, name=nodePoolTarget", elemType: shared.GkeNodePoolTarget })
  nodePoolTarget?: GkeNodePoolTarget[];
}
