import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryServicesConfig } from "./auxiliaryservicesconfig";
import { KubernetesClusterConfig } from "./kubernetesclusterconfig";
/**
 * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
**/
export declare class VirtualClusterConfig extends SpeakeasyBase {
    auxiliaryServicesConfig?: AuxiliaryServicesConfig;
    kubernetesClusterConfig?: KubernetesClusterConfig;
    stagingBucket?: string;
}
