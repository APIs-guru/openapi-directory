import { SpeakeasyBase } from "../../../internal/utils";
import { TimeTarget } from "./timetarget";
/**
 * Compute the corresponding cursor for a publish or event time in a topic partition.
**/
export declare class ComputeTimeCursorRequest extends SpeakeasyBase {
    partition?: string;
    target?: TimeTarget;
}
