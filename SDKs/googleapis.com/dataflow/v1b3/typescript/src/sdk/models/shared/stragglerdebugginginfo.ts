import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HotKeyDebuggingInfo } from "./hotkeydebugginginfo";


// StragglerDebuggingInfo
/** 
 * Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.
**/
export class StragglerDebuggingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=hotKey" })
  hotKey?: HotKeyDebuggingInfo;
}
