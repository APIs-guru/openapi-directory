import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
export declare class MultiCloudCluster extends SpeakeasyBase {
    clusterMissing?: boolean;
    resourceLink?: string;
}
/**
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
export declare class MultiCloudClusterInput extends SpeakeasyBase {
    resourceLink?: string;
}
