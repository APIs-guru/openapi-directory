import { SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeDataDiskAssignment } from "./keyrangedatadiskassignment";
/**
 * Describes full or partial data disk assignment information of the computation ranges.
**/
export declare class StreamingComputationRanges extends SpeakeasyBase {
    computationId?: string;
    rangeAssignments?: KeyRangeDataDiskAssignment[];
}
