import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisplayedProperty } from "./displayedproperty";



// Metaline
/** 
 * A metaline is a list of properties that are displayed along with the search result to provide context.
**/
export class Metaline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties", elemType: DisplayedProperty })
  properties?: DisplayedProperty[];
}
