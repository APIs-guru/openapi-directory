import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConditionContext
/** 
 * The IAM conditions context.
**/
export class ConditionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTime" })
  accessTime?: string;
}
