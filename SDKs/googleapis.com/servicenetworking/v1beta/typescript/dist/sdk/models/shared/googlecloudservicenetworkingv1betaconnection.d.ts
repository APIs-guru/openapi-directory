import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a private connection resource. A private connection is implemented as a VPC Network Peering connection between a service producer's VPC network and a service consumer's VPC network.
**/
export declare class GoogleCloudServicenetworkingV1betaConnection extends SpeakeasyBase {
    network?: string;
    peering?: string;
    reservedPeeringRanges?: string[];
    service?: string;
}
