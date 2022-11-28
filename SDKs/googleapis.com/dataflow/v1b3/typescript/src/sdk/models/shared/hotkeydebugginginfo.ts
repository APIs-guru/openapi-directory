import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HotKeyInfo } from "./hotkeyinfo";



// HotKeyDebuggingInfo
/** 
 * Information useful for debugging a hot key detection.
**/
export class HotKeyDebuggingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedHotKeys", elemType: HotKeyInfo })
  detectedHotKeys?: Map<string, HotKeyInfo>;
}
