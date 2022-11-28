import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
export declare enum TargetChangeTargetChangeTypeEnum {
    NoChange = "NO_CHANGE",
    Add = "ADD",
    Remove = "REMOVE",
    Current = "CURRENT",
    Reset = "RESET"
}
/**
 * Targets being watched have changed.
**/
export declare class TargetChange extends SpeakeasyBase {
    cause?: Status;
    readTime?: string;
    resumeToken?: string;
    targetChangeType?: TargetChangeTargetChangeTypeEnum;
    targetIds?: number[];
}
