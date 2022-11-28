import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
**/
export declare class VpcPeeringConnectivity extends SpeakeasyBase {
    vpc?: string;
}
