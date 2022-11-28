import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum {
    Unspecified = "UNSPECIFIED",
    Ignore = "IGNORE",
    None = "NONE",
    Fatal = "FATAL",
    FixedInterval = "FIXED_INTERVAL",
    LinearBackoff = "LINEAR_BACKOFF",
    ExponentialBackoff = "EXPONENTIAL_BACKOFF",
    RestartWorkflowWithBackoff = "RESTART_WORKFLOW_WITH_BACKOFF"
}
/**
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
export declare class EnterpriseCrmEventbusProtoFailurePolicy extends SpeakeasyBase {
    intervalInSeconds?: string;
    maxNumRetries?: number;
    retryStrategy?: EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
}
