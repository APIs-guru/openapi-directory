import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MultiCloudClusterInput
/** 
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
export class MultiCloudClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}


// MultiCloudCluster
/** 
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
export class MultiCloudCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
