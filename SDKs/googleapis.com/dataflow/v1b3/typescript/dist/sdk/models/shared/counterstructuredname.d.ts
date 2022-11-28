import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CounterStructuredNameOriginEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum CounterStructuredNamePortionEnum {
    All = "ALL",
    Key = "KEY",
    Value = "VALUE"
}
/**
 * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
**/
export declare class CounterStructuredName extends SpeakeasyBase {
    componentStepName?: string;
    executionStepName?: string;
    inputIndex?: number;
    name?: string;
    origin?: CounterStructuredNameOriginEnum;
    originNamespace?: string;
    originalRequestingStepName?: string;
    originalStepName?: string;
    portion?: CounterStructuredNamePortionEnum;
    workerId?: string;
}
