import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTargetingExpression
/** 
 * Remarketing List Targeting Expression.
**/
export class ListTargetingExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression?: string;
}
