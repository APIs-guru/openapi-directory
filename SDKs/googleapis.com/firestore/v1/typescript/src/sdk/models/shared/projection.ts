import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldReference } from "./fieldreference";



// Projection
/** 
 * The projection of document's fields to return.
**/
export class Projection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: FieldReference })
  fields?: FieldReference[];
}
