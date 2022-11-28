import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTargetingExpression
/** 
 * Remarketing List Targeting Expression.
**/
export class ListTargetingExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;
}
