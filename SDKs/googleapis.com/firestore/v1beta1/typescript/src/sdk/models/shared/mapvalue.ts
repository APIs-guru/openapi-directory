import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// MapValue
/** 
 * A map value.
**/
export class MapValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Value })
  fields?: Map<string, Value>;
}
