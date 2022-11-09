import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// RuntimeEntitySchema
/** 
 * Schema of a runtime entity.
**/
export class RuntimeEntitySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];
}
