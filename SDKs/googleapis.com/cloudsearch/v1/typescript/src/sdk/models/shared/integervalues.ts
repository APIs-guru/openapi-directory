import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntegerValues
/** 
 * List of integer values.
**/
export class IntegerValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
