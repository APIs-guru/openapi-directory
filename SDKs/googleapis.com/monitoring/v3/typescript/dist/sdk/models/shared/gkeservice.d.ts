import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
**/
export declare class GkeServiceInput extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
    serviceName?: string;
}
/**
 * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
**/
export declare class GkeService extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    namespaceName?: string;
    projectId?: string;
    serviceName?: string;
}
