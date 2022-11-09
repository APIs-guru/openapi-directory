import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HotKeyInfo } from "./hotkeyinfo";


// HotKeyDebuggingInfo
/** 
 * Information useful for debugging a hot key detection.
**/
export class HotKeyDebuggingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedHotKeys", elemType: shared.HotKeyInfo })
  detectedHotKeys?: Map<string, HotKeyInfo>;
}
