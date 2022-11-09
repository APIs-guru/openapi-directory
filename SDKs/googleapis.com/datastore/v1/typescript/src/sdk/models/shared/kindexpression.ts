import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KindExpression
/** 
 * A representation of a kind.
**/
export class KindExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
