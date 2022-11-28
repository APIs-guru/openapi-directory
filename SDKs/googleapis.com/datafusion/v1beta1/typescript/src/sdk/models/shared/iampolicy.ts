import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { Status } from "./status";



// IamPolicy
/** 
 * IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
**/
export class IamPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
