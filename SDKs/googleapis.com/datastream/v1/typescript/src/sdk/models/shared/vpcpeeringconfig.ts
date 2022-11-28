import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VpcPeeringConfig
/** 
 * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
**/
export class VpcPeeringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc?: string;
}
