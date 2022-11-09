import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Schema } from "./schema";


// ValidateSchemaRequest
/** 
 * Request for the `ValidateSchema` method.
**/
export class ValidateSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=schema" })
  schema?: Schema;
}
