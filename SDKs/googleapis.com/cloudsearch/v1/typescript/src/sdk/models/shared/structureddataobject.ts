import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NamedProperty } from "./namedproperty";


// StructuredDataObject
/** 
 * A structured data object consisting of named properties.
**/
export class StructuredDataObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties", elemType: shared.NamedProperty })
  properties?: NamedProperty[];
}
