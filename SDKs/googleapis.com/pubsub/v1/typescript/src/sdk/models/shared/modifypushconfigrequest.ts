import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PushConfig } from "./pushconfig";



// ModifyPushConfigRequest
/** 
 * Request for the ModifyPushConfig method.
**/
export class ModifyPushConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;
}
