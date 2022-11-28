import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyReference } from "./propertyreference";



// Projection
/** 
 * A representation of a property in a projection.
**/
export class Projection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: PropertyReference;
}
