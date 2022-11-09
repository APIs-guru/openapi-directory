import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeCluster
/** 
 * EdgeCluster contains information specific to Google Edge Clusters.
**/
export class EdgeCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
