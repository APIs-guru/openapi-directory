import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisplayedProperty } from "./displayedproperty";


// Metaline
/** 
 * A metaline is a list of properties that are displayed along with the search result to provide context.
**/
export class Metaline extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties", elemType: shared.DisplayedProperty })
  properties?: DisplayedProperty[];
}
