import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaInput } from "./schema";



// ValidateSchemaRequestInput
/** 
 * Request for the `ValidateSchema` method.
**/
export class ValidateSchemaRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: SchemaInput;
}
