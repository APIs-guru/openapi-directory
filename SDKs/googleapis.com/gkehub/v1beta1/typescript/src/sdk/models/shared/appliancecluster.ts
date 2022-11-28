import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplianceCluster
/** 
 * ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
**/
export class ApplianceCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
