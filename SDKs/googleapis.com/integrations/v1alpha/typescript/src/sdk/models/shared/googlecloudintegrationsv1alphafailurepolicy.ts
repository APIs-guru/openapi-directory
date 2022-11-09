import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum {
    RetryStrategyUnspecified = "RETRY_STRATEGY_UNSPECIFIED"
,    Ignore = "IGNORE"
,    None = "NONE"
,    Fatal = "FATAL"
,    FixedInterval = "FIXED_INTERVAL"
,    LinearBackoff = "LINEAR_BACKOFF"
,    ExponentialBackoff = "EXPONENTIAL_BACKOFF"
,    RestartIntegrationWithBackoff = "RESTART_INTEGRATION_WITH_BACKOFF"
}


// GoogleCloudIntegrationsV1alphaFailurePolicy
/** 
 * Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied).
**/
export class GoogleCloudIntegrationsV1alphaFailurePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=intervalTime" })
  intervalTime?: string;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=retryStrategy" })
  retryStrategy?: GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
}
