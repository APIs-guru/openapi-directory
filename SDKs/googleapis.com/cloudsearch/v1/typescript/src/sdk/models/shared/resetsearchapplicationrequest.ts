import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DebugOptions } from "./debugoptions";


export class ResetSearchApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;
}
