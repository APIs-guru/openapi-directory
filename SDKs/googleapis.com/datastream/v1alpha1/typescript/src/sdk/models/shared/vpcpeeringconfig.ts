import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VpcPeeringConfig
/** 
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
**/
export class VpcPeeringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vpcName" })
  vpcName?: string;
}
