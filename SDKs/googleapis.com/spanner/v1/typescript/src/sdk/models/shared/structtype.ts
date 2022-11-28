import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// StructType
/** 
 * `StructType` defines the fields of a STRUCT type.
**/
export class StructType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];
}
