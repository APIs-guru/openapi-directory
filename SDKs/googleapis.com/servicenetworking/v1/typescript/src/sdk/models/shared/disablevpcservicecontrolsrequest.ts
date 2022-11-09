import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableVpcServiceControlsRequest
/** 
 * Request to disable VPC service controls.
**/
export class DisableVpcServiceControlsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;
}
