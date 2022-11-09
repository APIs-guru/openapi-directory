import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DebugOptions
/** 
 * Describes any options that have an effect on the debugging of pipelines.
**/
export class DebugOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableHotKeyLogging" })
  enableHotKeyLogging?: boolean;
}
