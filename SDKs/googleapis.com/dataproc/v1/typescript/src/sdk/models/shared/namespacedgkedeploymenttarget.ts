import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NamespacedGkeDeploymentTarget
/** 
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
**/
export class NamespacedGkeDeploymentTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterNamespace" })
  clusterNamespace?: string;

  @Metadata({ data: "json, name=targetGkeCluster" })
  targetGkeCluster?: string;
}
