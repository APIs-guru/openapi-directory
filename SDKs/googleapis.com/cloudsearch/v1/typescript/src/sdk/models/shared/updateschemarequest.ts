import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { Schema } from "./schema";



export class UpdateSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: Schema;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
