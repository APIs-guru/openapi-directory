import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyDisplayOptions
/** 
 * The display options for a property.
**/
export class PropertyDisplayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayLabel" })
  displayLabel?: string;
}
