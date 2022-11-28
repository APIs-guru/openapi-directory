import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckUpgradeRequest
/** 
 * Request to check whether image upgrade will succeed.
**/
export class CheckUpgradeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageVersion" })
  imageVersion?: string;
}
