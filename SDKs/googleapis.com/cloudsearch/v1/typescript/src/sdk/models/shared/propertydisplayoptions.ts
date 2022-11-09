import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PropertyDisplayOptions
/** 
 * The display options for a property.
**/
export class PropertyDisplayOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayLabel" })
  displayLabel?: string;
}
