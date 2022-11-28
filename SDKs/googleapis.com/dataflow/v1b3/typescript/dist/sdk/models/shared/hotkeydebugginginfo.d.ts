import { SpeakeasyBase } from "../../../internal/utils";
import { HotKeyInfo } from "./hotkeyinfo";
/**
 * Information useful for debugging a hot key detection.
**/
export declare class HotKeyDebuggingInfo extends SpeakeasyBase {
    detectedHotKeys?: Map<string, HotKeyInfo>;
}
