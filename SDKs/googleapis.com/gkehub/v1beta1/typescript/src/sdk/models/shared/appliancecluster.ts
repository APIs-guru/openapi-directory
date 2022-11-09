import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplianceCluster
/** 
 * ApplianceCluster contains information specific to GDC Edge Appliance Clusters.
**/
export class ApplianceCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceLink" })
  resourceLink?: string;
}
