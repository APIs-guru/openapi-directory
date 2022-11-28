import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { Outcome } from "./outcome";
import { Specification } from "./specification";
export declare enum ExecutionStateEnum {
    UnknownState = "unknownState",
    Pending = "pending",
    InProgress = "inProgress",
    Complete = "complete"
}
/**
 * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
**/
export declare class Execution extends SpeakeasyBase {
    completionTime?: Timestamp;
    creationTime?: Timestamp;
    dimensionDefinitions?: Map<string, any>[];
    executionId?: string;
    outcome?: Outcome;
    specification?: Specification;
    state?: ExecutionStateEnum;
    testExecutionMatrixId?: string;
}
