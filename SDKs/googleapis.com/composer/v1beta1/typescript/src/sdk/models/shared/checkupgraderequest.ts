import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckUpgradeRequest
/** 
 * Request to check whether image upgrade will succeed.
**/
export class CheckUpgradeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageVersion" })
  imageVersion?: string;
}
