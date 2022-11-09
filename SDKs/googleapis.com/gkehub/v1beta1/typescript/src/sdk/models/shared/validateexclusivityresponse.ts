import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";


// ValidateExclusivityResponse
/** 
 * The response of exclusivity artifacts validation result status.
**/
export class ValidateExclusivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: GoogleRpcStatus;
}
