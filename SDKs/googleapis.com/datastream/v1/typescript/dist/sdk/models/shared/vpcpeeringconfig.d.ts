import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
**/
export declare class VpcPeeringConfig extends SpeakeasyBase {
    subnet?: string;
    vpc?: string;
}
