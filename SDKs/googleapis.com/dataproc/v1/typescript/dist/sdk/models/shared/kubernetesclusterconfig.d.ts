import { SpeakeasyBase } from "../../../internal/utils";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { KubernetesSoftwareConfig } from "./kubernetessoftwareconfig";
/**
 * The configuration for running the Dataproc cluster on Kubernetes.
**/
export declare class KubernetesClusterConfig extends SpeakeasyBase {
    gkeClusterConfig?: GkeClusterConfig;
    kubernetesNamespace?: string;
    kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}
