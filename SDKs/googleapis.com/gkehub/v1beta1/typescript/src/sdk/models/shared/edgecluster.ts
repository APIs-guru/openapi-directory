import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeCluster
/** 
 * EdgeCluster contains information specific to Google Edge Clusters.
**/
export class EdgeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
