import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
export declare class GkeNamespaceInput extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
}
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
export declare class GkeNamespace extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
    projectId?: string;
}
