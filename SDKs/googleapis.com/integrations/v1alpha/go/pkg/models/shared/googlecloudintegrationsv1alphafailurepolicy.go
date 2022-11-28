package shared

type GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum string

const (
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumRetryStrategyUnspecified      GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "RETRY_STRATEGY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumIgnore                        GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "IGNORE"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumNone                          GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "NONE"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumFatal                         GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "FATAL"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumFixedInterval                 GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "FIXED_INTERVAL"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumLinearBackoff                 GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "LINEAR_BACKOFF"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumExponentialBackoff            GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "EXPONENTIAL_BACKOFF"
	GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnumRestartIntegrationWithBackoff GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum = "RESTART_INTEGRATION_WITH_BACKOFF"
)

// GoogleCloudIntegrationsV1alphaFailurePolicy
// Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
type GoogleCloudIntegrationsV1alphaFailurePolicy struct {
	IntervalTime  *string                                                       `json:"intervalTime,omitempty"`
	MaxRetries    *int32                                                        `json:"maxRetries,omitempty"`
	RetryStrategy *GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum `json:"retryStrategy,omitempty"`
}
