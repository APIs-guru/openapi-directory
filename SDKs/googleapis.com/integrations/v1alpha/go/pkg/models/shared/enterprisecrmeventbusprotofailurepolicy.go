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

type EnterpriseCrmEventbusProtoFailurePolicy struct {
	IntervalInSeconds *string                                                   `json:"intervalInSeconds"`
	MaxNumRetries     *int32                                                    `json:"maxNumRetries"`
	RetryStrategy     *EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum `json:"retryStrategy"`
}
