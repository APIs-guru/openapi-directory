import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NamespacedGkeDeploymentTarget
/** 
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
**/
export class NamespacedGkeDeploymentTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterNamespace" })
  clusterNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=targetGkeCluster" })
  targetGkeCluster?: string;
}
