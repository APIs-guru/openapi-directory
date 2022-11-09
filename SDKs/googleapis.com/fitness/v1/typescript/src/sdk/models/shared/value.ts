import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueMapValEntry } from "./valuemapvalentry";


// Value
/** 
 * Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=fpVal" })
  fpVal?: number;

  @Metadata({ data: "json, name=intVal" })
  intVal?: number;

  @Metadata({ data: "json, name=mapVal", elemType: shared.ValueMapValEntry })
  mapVal?: ValueMapValEntry[];

  @Metadata({ data: "json, name=stringVal" })
  stringVal?: string;
}
