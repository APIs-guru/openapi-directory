import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeCluster
/** 
 * GkeCluster contains information specific to GKE clusters.
**/
export class GkeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}


// GkeClusterInput
/** 
 * GkeCluster contains information specific to GKE clusters.
**/
export class GkeClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
