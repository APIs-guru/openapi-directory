import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoutingVpc
/** 
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
export class RoutingVpc extends SpeakeasyBase {
  @Metadata({ data: "json, name=requiredForNewSiteToSiteDataTransferSpokes" })
  requiredForNewSiteToSiteDataTransferSpokes?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
