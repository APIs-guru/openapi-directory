import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OnPremClusterClusterTypeEnum {
    ClustertypeUnspecified = "CLUSTERTYPE_UNSPECIFIED",
    Bootstrap = "BOOTSTRAP",
    Hybrid = "HYBRID",
    Standalone = "STANDALONE",
    User = "USER"
}


// OnPremClusterInput
/** 
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
export class OnPremClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminCluster" })
  adminCluster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterType" })
  clusterType?: OnPremClusterClusterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}


// OnPremCluster
/** 
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
export class OnPremCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminCluster" })
  adminCluster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterType" })
  clusterType?: OnPremClusterClusterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
