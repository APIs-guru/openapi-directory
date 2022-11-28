import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnumValues
/** 
 * List of enum values.
**/
export class EnumValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
