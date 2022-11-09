import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// ArrayValue
/** 
 * An array value.
**/
export class ArrayValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.Value })
  values?: Value[];
}
