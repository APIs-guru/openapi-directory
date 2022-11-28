import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntegerValues
/** 
 * List of integer values.
**/
export class IntegerValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
