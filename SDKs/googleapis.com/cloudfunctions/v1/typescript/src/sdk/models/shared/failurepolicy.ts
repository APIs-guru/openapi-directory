import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailurePolicy
/** 
 * Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).
**/
export class FailurePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retry" })
  retry?: Map<string, any>;
}
