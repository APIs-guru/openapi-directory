import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// RuntimeEntitySchema
/** 
 * Schema of a runtime entity.
**/
export class RuntimeEntitySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];
}
