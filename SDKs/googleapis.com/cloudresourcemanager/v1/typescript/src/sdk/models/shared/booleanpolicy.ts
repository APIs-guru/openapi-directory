import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BooleanPolicy
/** 
 * Used in `policy_type` to specify how `boolean_policy` will behave at this resource.
**/
export class BooleanPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforced" })
  enforced?: boolean;
}
