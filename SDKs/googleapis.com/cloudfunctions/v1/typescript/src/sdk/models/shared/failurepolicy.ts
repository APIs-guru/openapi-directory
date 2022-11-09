import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailurePolicy
/** 
 * Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).
**/
export class FailurePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=retry" })
  retry?: Map<string, any>;
}
