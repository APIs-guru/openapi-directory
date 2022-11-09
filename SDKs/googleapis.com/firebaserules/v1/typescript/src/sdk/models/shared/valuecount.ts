import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValueCount
/** 
 * Tuple for how many times an Expression was evaluated to a particular ExpressionValue.
**/
export class ValueCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
