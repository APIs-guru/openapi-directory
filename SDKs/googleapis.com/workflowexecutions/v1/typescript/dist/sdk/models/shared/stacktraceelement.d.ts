import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A single stack element (frame) where an error occurred.
**/
export declare class StackTraceElement extends SpeakeasyBase {
    position?: Position;
    routine?: string;
    step?: string;
}
