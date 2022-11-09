import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";
import { Schema } from "./schema";


export class UpdateSchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @Metadata({ data: "json, name=schema" })
  schema?: Schema;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
