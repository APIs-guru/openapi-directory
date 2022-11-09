import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OnPremClusterClusterTypeEnum {
    ClustertypeUnspecified = "CLUSTERTYPE_UNSPECIFIED"
,    Bootstrap = "BOOTSTRAP"
,    Hybrid = "HYBRID"
,    Standalone = "STANDALONE"
,    User = "USER"
}


// OnPremCluster
/** 
 * OnPremCluster contains information specific to GKE On-Prem clusters.
**/
export class OnPremCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminCluster" })
  adminCluster?: boolean;

  @Metadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @Metadata({ data: "json, name=clusterType" })
  clusterType?: OnPremClusterClusterTypeEnum;

  @Metadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
