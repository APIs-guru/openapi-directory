import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// MapValue
/** 
 * A map value.
**/
export class MapValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Value })
  fields?: Map<string, Value>;
}
