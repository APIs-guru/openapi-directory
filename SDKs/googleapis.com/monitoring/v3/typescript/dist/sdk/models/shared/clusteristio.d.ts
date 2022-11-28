import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
**/
export declare class ClusterIstio extends SpeakeasyBase {
    clusterName?: string;
    location?: string;
    serviceName?: string;
    serviceNamespace?: string;
}
