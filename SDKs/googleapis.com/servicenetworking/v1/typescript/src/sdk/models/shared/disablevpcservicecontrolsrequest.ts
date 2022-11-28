import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableVpcServiceControlsRequest
/** 
 * Request to disable VPC service controls.
**/
export class DisableVpcServiceControlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;
}
