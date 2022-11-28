import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DebugOptions
/** 
 * Describes any options that have an effect on the debugging of pipelines.
**/
export class DebugOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableHotKeyLogging" })
  enableHotKeyLogging?: boolean;
}
