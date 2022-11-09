import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcPeeringConnectivity
/** 
 * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
**/
export class VpcPeeringConnectivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=vpc" })
  vpc?: string;
}
