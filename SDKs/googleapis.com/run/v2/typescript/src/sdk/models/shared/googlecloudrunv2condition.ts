import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRunV2ConditionExecutionReasonEnum {
    ExecutionReasonUndefined = "EXECUTION_REASON_UNDEFINED"
,    JobStatusServicePollingError = "JOB_STATUS_SERVICE_POLLING_ERROR"
,    NonZeroExitCode = "NON_ZERO_EXIT_CODE"
,    Cancelled = "CANCELLED"
}

export enum GoogleCloudRunV2ConditionReasonEnum {
    CommonReasonUndefined = "COMMON_REASON_UNDEFINED"
,    Unknown = "UNKNOWN"
,    RevisionFailed = "REVISION_FAILED"
,    ProgressDeadlineExceeded = "PROGRESS_DEADLINE_EXCEEDED"
,    ContainerMissing = "CONTAINER_MISSING"
,    ContainerPermissionDenied = "CONTAINER_PERMISSION_DENIED"
,    ContainerImageUnauthorized = "CONTAINER_IMAGE_UNAUTHORIZED"
,    ContainerImageAuthorizationCheckFailed = "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED"
,    EncryptionKeyPermissionDenied = "ENCRYPTION_KEY_PERMISSION_DENIED"
,    EncryptionKeyCheckFailed = "ENCRYPTION_KEY_CHECK_FAILED"
,    SecretsAccessCheckFailed = "SECRETS_ACCESS_CHECK_FAILED"
,    WaitingForOperation = "WAITING_FOR_OPERATION"
,    ImmediateRetry = "IMMEDIATE_RETRY"
,    PostponedRetry = "POSTPONED_RETRY"
,    Internal = "INTERNAL"
}

export enum GoogleCloudRunV2ConditionRevisionReasonEnum {
    RevisionReasonUndefined = "REVISION_REASON_UNDEFINED"
,    Pending = "PENDING"
,    Reserve = "RESERVE"
,    Retired = "RETIRED"
,    Retiring = "RETIRING"
,    Recreating = "RECREATING"
,    HealthCheckContainerError = "HEALTH_CHECK_CONTAINER_ERROR"
,    CustomizedPathResponsePending = "CUSTOMIZED_PATH_RESPONSE_PENDING"
,    MinInstancesNotProvisioned = "MIN_INSTANCES_NOT_PROVISIONED"
,    ActiveRevisionLimitReached = "ACTIVE_REVISION_LIMIT_REACHED"
,    NoDeployment = "NO_DEPLOYMENT"
,    HealthCheckSkipped = "HEALTH_CHECK_SKIPPED"
}

export enum GoogleCloudRunV2ConditionSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Info = "INFO"
}

export enum GoogleCloudRunV2ConditionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    ConditionPending = "CONDITION_PENDING"
,    ConditionReconciling = "CONDITION_RECONCILING"
,    ConditionFailed = "CONDITION_FAILED"
,    ConditionSucceeded = "CONDITION_SUCCEEDED"
}


// GoogleCloudRunV2Condition
/** 
 * Defines a status condition for a resource.
**/
export class GoogleCloudRunV2Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionReason" })
  executionReason?: GoogleCloudRunV2ConditionExecutionReasonEnum;

  @Metadata({ data: "json, name=lastTransitionTime" })
  lastTransitionTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: GoogleCloudRunV2ConditionReasonEnum;

  @Metadata({ data: "json, name=revisionReason" })
  revisionReason?: GoogleCloudRunV2ConditionRevisionReasonEnum;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudRunV2ConditionSeverityEnum;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudRunV2ConditionStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
