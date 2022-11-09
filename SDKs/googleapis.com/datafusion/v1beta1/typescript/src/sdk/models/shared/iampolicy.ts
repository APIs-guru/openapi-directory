import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";
import { Status } from "./status";


// IamPolicy
/** 
 * IAMPolicy encapsulates the IAM policy name, definition and status of policy fetching.
**/
export class IamPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: Policy;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
