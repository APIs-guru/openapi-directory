import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedProperty } from "./namedproperty";



// StructuredDataObject
/** 
 * A structured data object consisting of named properties.
**/
export class StructuredDataObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties", elemType: NamedProperty })
  properties?: NamedProperty[];
}
