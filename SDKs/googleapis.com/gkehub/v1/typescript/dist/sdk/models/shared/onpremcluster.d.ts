import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnPremClusterClusterTypeEnum {
    ClustertypeUnspecified = "CLUSTERTYPE_UNSPECIFIED",
    Bootstrap = "BOOTSTRAP",
    Hybrid = "HYBRID",
    Standalone = "STANDALONE",
    User = "USER"
}
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
export declare class OnPremCluster extends SpeakeasyBase {
    adminCluster?: boolean;
    clusterMissing?: boolean;
    clusterType?: OnPremClusterClusterTypeEnum;
    resourceLink?: string;
}
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
export declare class OnPremClusterInput extends SpeakeasyBase {
    adminCluster?: boolean;
    clusterType?: OnPremClusterClusterTypeEnum;
    resourceLink?: string;
}
