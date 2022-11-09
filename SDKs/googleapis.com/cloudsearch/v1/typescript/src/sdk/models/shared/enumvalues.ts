import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnumValues
/** 
 * List of enum values.
**/
export class EnumValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
