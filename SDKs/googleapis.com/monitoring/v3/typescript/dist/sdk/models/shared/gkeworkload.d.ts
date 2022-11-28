import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
export declare class GkeWorkload extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
    projectId?: string;
    topLevelControllerName?: string;
    topLevelControllerType?: string;
}
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
**/
export declare class GkeWorkloadInput extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
    topLevelControllerName?: string;
    topLevelControllerType?: string;
}
