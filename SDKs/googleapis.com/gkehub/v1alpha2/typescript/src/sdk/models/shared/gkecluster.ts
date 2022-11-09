import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeCluster
/** 
 * GkeCluster contains information specific to GKE clusters.
**/
export class GkeCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterMissing" })
  clusterMissing?: boolean;

  @Metadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
