import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableVpcServiceControlsRequest
/** 
 * Request to enable VPC service controls.
**/
export class EnableVpcServiceControlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;
}
