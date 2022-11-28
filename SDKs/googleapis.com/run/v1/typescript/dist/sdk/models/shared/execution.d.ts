import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ExecutionSpec } from "./executionspec";
import { ExecutionStatus } from "./executionstatus";
/**
 * Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
**/
export declare class Execution extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: ExecutionSpec;
    status?: ExecutionStatus;
}
