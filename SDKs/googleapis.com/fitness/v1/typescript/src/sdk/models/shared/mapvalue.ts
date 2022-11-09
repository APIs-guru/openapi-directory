import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MapValue
/** 
 * Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
**/
export class MapValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=fpVal" })
  fpVal?: number;
}
