import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GkeCluster contains information specific to GKE clusters.
**/
export declare class GkeCluster extends SpeakeasyBase {
    clusterMissing?: boolean;
    resourceLink?: string;
}
/**
 * GkeCluster contains information specific to GKE clusters.
**/
export declare class GkeClusterInput extends SpeakeasyBase {
    resourceLink?: string;
}
