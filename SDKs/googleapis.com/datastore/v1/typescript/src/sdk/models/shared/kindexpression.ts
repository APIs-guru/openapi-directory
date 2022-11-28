import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KindExpression
/** 
 * A representation of a kind.
**/
export class KindExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
