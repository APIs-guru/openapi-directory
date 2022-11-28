import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum {
    Unspecified = "UNSPECIFIED",
    Ignore = "IGNORE",
    None = "NONE",
    Fatal = "FATAL",
    FixedInterval = "FIXED_INTERVAL",
    LinearBackoff = "LINEAR_BACKOFF",
    ExponentialBackoff = "EXPONENTIAL_BACKOFF",
    RestartWorkflowWithBackoff = "RESTART_WORKFLOW_WITH_BACKOFF"
}


// EnterpriseCrmEventbusProtoFailurePolicy
/** 
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
export class EnterpriseCrmEventbusProtoFailurePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intervalInSeconds" })
  intervalInSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=maxNumRetries" })
  maxNumRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
}
