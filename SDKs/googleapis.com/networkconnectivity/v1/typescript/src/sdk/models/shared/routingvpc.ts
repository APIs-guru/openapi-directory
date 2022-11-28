import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoutingVpcInput
/** 
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
export class RoutingVpcInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// RoutingVpc
/** 
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
export class RoutingVpc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requiredForNewSiteToSiteDataTransferSpokes" })
  requiredForNewSiteToSiteDataTransferSpokes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
