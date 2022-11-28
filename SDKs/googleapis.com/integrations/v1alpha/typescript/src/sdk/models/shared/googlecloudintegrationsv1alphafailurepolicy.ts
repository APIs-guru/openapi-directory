import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum {
    RetryStrategyUnspecified = "RETRY_STRATEGY_UNSPECIFIED",
    Ignore = "IGNORE",
    None = "NONE",
    Fatal = "FATAL",
    FixedInterval = "FIXED_INTERVAL",
    LinearBackoff = "LINEAR_BACKOFF",
    ExponentialBackoff = "EXPONENTIAL_BACKOFF",
    RestartIntegrationWithBackoff = "RESTART_INTEGRATION_WITH_BACKOFF"
}


// GoogleCloudIntegrationsV1alphaFailurePolicy
/** 
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
export class GoogleCloudIntegrationsV1alphaFailurePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intervalTime" })
  intervalTime?: string;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=retryStrategy" })
  retryStrategy?: GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
}
