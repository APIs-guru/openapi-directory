import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
**/
export declare class NamespacedGkeDeploymentTarget extends SpeakeasyBase {
    clusterNamespace?: string;
    targetGkeCluster?: string;
}
