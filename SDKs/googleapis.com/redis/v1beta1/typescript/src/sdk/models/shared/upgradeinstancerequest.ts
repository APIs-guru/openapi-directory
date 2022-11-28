import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpgradeInstanceRequest
/** 
 * Request for UpgradeInstance.
**/
export class UpgradeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redisVersion" })
  redisVersion?: string;
}
