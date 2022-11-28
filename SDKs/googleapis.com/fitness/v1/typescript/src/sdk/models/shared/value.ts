import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueMapValEntry } from "./valuemapvalentry";



// Value
/** 
 * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fpVal" })
  fpVal?: number;

  @SpeakeasyMetadata({ data: "json, name=intVal" })
  intVal?: number;

  @SpeakeasyMetadata({ data: "json, name=mapVal", elemType: ValueMapValEntry })
  mapVal?: ValueMapValEntry[];

  @SpeakeasyMetadata({ data: "json, name=stringVal" })
  stringVal?: string;
}
