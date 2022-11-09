import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConditionContext
/** 
 * The IAM conditions context.
**/
export class ConditionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTime" })
  accessTime?: string;
}
