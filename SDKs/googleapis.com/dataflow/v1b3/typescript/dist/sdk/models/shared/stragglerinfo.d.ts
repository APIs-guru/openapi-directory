import { SpeakeasyBase } from "../../../internal/utils";
import { StragglerDebuggingInfo } from "./stragglerdebugginginfo";
/**
 * Information useful for straggler identification and debugging.
**/
export declare class StragglerInfo extends SpeakeasyBase {
    causes?: Map<string, StragglerDebuggingInfo>;
    startTime?: string;
}
