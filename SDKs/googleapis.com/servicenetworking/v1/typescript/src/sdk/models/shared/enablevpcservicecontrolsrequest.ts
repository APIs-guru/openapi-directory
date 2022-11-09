import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableVpcServiceControlsRequest
/** 
 * Request to enable VPC service controls.
**/
export class EnableVpcServiceControlsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;
}
