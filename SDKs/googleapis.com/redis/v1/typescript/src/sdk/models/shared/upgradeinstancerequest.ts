import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpgradeInstanceRequest
/** 
 * Request for UpgradeInstance.
**/
export class UpgradeInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=redisVersion" })
  redisVersion?: string;
}
