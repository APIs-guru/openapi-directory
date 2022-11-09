import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValueTargetingExpression
/** 
 * Key Value Targeting Expression.
**/
export class KeyValueTargetingExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;
}
