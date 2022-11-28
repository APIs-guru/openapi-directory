import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum {
    RetryStrategyUnspecified = "RETRY_STRATEGY_UNSPECIFIED",
    Ignore = "IGNORE",
    None = "NONE",
    Fatal = "FATAL",
    FixedInterval = "FIXED_INTERVAL",
    LinearBackoff = "LINEAR_BACKOFF",
    ExponentialBackoff = "EXPONENTIAL_BACKOFF",
    RestartIntegrationWithBackoff = "RESTART_INTEGRATION_WITH_BACKOFF"
}
/**
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
export declare class GoogleCloudIntegrationsV1alphaFailurePolicy extends SpeakeasyBase {
    intervalTime?: string;
    maxRetries?: number;
    retryStrategy?: GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
}
