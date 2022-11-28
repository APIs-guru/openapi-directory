import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// ArrayValue
/** 
 * An array value.
**/
export class ArrayValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: Value })
  values?: Value[];
}
