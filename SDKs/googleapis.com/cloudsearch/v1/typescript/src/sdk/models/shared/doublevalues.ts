import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleValues
/** 
 * List of double values.
**/
export class DoubleValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: number[];
}
