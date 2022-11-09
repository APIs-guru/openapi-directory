import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyReference } from "./propertyreference";


// Projection
/** 
 * A representation of a property in a projection.
**/
export class Projection extends SpeakeasyBase {
  @Metadata({ data: "json, name=property" })
  property?: PropertyReference;
}
