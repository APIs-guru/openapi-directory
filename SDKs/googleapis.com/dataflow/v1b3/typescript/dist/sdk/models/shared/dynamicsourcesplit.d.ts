import { SpeakeasyBase } from "../../../internal/utils";
import { DerivedSource } from "./derivedsource";
/**
 * When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
**/
export declare class DynamicSourceSplit extends SpeakeasyBase {
    primary?: DerivedSource;
    residual?: DerivedSource;
}
