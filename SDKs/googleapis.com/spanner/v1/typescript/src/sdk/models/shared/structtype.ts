import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// StructType
/** 
 * `StructType` defines the fields of a STRUCT type.
**/
export class StructType extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];
}
