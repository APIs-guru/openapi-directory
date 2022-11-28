import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";



export class ResetSearchApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugOptions" })
  debugOptions?: DebugOptions;
}
