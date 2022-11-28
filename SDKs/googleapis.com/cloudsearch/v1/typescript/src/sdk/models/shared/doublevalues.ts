import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleValues
/** 
 * List of double values.
**/
export class DoubleValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: number[];
}
