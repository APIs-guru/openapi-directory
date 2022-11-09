import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PushConfig } from "./pushconfig";


// ModifyPushConfigRequest
/** 
 * Request for the ModifyPushConfig method.
**/
export class ModifyPushConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;
}
