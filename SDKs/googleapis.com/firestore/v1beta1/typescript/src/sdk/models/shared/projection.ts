import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldReference } from "./fieldreference";


// Projection
/** 
 * The projection of document's fields to return.
**/
export class Projection extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.FieldReference })
  fields?: FieldReference[];
}
