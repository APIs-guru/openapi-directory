import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MultiCloudCluster
/** 
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
**/
export class MultiCloudCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @Metadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
