import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValueTargetingExpression
/** 
 * Key Value Targeting Expression.
**/
export class KeyValueTargetingExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;
}
