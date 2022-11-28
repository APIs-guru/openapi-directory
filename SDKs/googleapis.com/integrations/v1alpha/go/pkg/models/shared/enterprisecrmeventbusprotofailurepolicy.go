package shared

type EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum string

const (
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumUnspecified                EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "UNSPECIFIED"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumIgnore                     EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "IGNORE"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumNone                       EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "NONE"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumFatal                      EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "FATAL"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumFixedInterval              EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "FIXED_INTERVAL"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumLinearBackoff              EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "LINEAR_BACKOFF"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumExponentialBackoff         EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "EXPONENTIAL_BACKOFF"
	EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnumRestartWorkflowWithBackoff EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum = "RESTART_WORKFLOW_WITH_BACKOFF"
)

// EnterpriseCrmEventbusProtoFailurePolicy
// Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
type EnterpriseCrmEventbusProtoFailurePolicy struct {
	IntervalInSeconds *string                                                   `json:"intervalInSeconds,omitempty"`
	MaxNumRetries     *int32                                                    `json:"maxNumRetries,omitempty"`
	RetryStrategy     *EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum `json:"retryStrategy,omitempty"`
}
