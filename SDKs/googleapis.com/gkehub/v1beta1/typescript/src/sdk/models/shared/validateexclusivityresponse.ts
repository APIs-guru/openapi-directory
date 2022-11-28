import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// ValidateExclusivityResponse
/** 
 * The response of exclusivity artifacts validation result status.
**/
export class ValidateExclusivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
