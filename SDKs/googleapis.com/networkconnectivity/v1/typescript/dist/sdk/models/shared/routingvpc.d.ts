import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
export declare class RoutingVpcInput extends SpeakeasyBase {
    uri?: string;
}
/**
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
export declare class RoutingVpc extends SpeakeasyBase {
    requiredForNewSiteToSiteDataTransferSpokes?: boolean;
    uri?: string;
}
