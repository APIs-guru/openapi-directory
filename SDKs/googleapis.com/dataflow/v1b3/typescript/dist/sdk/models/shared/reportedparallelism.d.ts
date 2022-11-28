import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the level of parallelism in a WorkItem's input, reported by the worker.
**/
export declare class ReportedParallelism extends SpeakeasyBase {
    isInfinite?: boolean;
    value?: number;
}
