import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisplayedProperty
/** 
 * A reference to a top-level property within the object that should be displayed in search results. The values of the chosen properties is displayed in the search results along with the display label for that property if one is specified. If a display label is not specified, only the values is shown.
**/
export class DisplayedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=propertyName" })
  propertyName?: string;
}
