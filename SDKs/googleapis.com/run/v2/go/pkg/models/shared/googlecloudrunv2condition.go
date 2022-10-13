package shared

type GoogleCloudRunV2ConditionExecutionReasonEnum string

const (
	GoogleCloudRunV2ConditionExecutionReasonEnumExecutionReasonUndefined     GoogleCloudRunV2ConditionExecutionReasonEnum = "EXECUTION_REASON_UNDEFINED"
	GoogleCloudRunV2ConditionExecutionReasonEnumJobStatusServicePollingError GoogleCloudRunV2ConditionExecutionReasonEnum = "JOB_STATUS_SERVICE_POLLING_ERROR"
	GoogleCloudRunV2ConditionExecutionReasonEnumNonZeroExitCode              GoogleCloudRunV2ConditionExecutionReasonEnum = "NON_ZERO_EXIT_CODE"
	GoogleCloudRunV2ConditionExecutionReasonEnumCancelled                    GoogleCloudRunV2ConditionExecutionReasonEnum = "CANCELLED"
)

type GoogleCloudRunV2ConditionReasonEnum string

const (
	GoogleCloudRunV2ConditionReasonEnumCommonReasonUndefined                  GoogleCloudRunV2ConditionReasonEnum = "COMMON_REASON_UNDEFINED"
	GoogleCloudRunV2ConditionReasonEnumUnknown                                GoogleCloudRunV2ConditionReasonEnum = "UNKNOWN"
	GoogleCloudRunV2ConditionReasonEnumRevisionFailed                         GoogleCloudRunV2ConditionReasonEnum = "REVISION_FAILED"
	GoogleCloudRunV2ConditionReasonEnumProgressDeadlineExceeded               GoogleCloudRunV2ConditionReasonEnum = "PROGRESS_DEADLINE_EXCEEDED"
	GoogleCloudRunV2ConditionReasonEnumContainerMissing                       GoogleCloudRunV2ConditionReasonEnum = "CONTAINER_MISSING"
	GoogleCloudRunV2ConditionReasonEnumContainerPermissionDenied              GoogleCloudRunV2ConditionReasonEnum = "CONTAINER_PERMISSION_DENIED"
	GoogleCloudRunV2ConditionReasonEnumContainerImageUnauthorized             GoogleCloudRunV2ConditionReasonEnum = "CONTAINER_IMAGE_UNAUTHORIZED"
	GoogleCloudRunV2ConditionReasonEnumContainerImageAuthorizationCheckFailed GoogleCloudRunV2ConditionReasonEnum = "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED"
	GoogleCloudRunV2ConditionReasonEnumEncryptionKeyPermissionDenied          GoogleCloudRunV2ConditionReasonEnum = "ENCRYPTION_KEY_PERMISSION_DENIED"
	GoogleCloudRunV2ConditionReasonEnumEncryptionKeyCheckFailed               GoogleCloudRunV2ConditionReasonEnum = "ENCRYPTION_KEY_CHECK_FAILED"
	GoogleCloudRunV2ConditionReasonEnumSecretsAccessCheckFailed               GoogleCloudRunV2ConditionReasonEnum = "SECRETS_ACCESS_CHECK_FAILED"
	GoogleCloudRunV2ConditionReasonEnumWaitingForOperation                    GoogleCloudRunV2ConditionReasonEnum = "WAITING_FOR_OPERATION"
	GoogleCloudRunV2ConditionReasonEnumImmediateRetry                         GoogleCloudRunV2ConditionReasonEnum = "IMMEDIATE_RETRY"
	GoogleCloudRunV2ConditionReasonEnumPostponedRetry                         GoogleCloudRunV2ConditionReasonEnum = "POSTPONED_RETRY"
	GoogleCloudRunV2ConditionReasonEnumInternal                               GoogleCloudRunV2ConditionReasonEnum = "INTERNAL"
)

type GoogleCloudRunV2ConditionRevisionReasonEnum string

const (
	GoogleCloudRunV2ConditionRevisionReasonEnumRevisionReasonUndefined       GoogleCloudRunV2ConditionRevisionReasonEnum = "REVISION_REASON_UNDEFINED"
	GoogleCloudRunV2ConditionRevisionReasonEnumPending                       GoogleCloudRunV2ConditionRevisionReasonEnum = "PENDING"
	GoogleCloudRunV2ConditionRevisionReasonEnumReserve                       GoogleCloudRunV2ConditionRevisionReasonEnum = "RESERVE"
	GoogleCloudRunV2ConditionRevisionReasonEnumRetired                       GoogleCloudRunV2ConditionRevisionReasonEnum = "RETIRED"
	GoogleCloudRunV2ConditionRevisionReasonEnumRetiring                      GoogleCloudRunV2ConditionRevisionReasonEnum = "RETIRING"
	GoogleCloudRunV2ConditionRevisionReasonEnumRecreating                    GoogleCloudRunV2ConditionRevisionReasonEnum = "RECREATING"
	GoogleCloudRunV2ConditionRevisionReasonEnumHealthCheckContainerError     GoogleCloudRunV2ConditionRevisionReasonEnum = "HEALTH_CHECK_CONTAINER_ERROR"
	GoogleCloudRunV2ConditionRevisionReasonEnumCustomizedPathResponsePending GoogleCloudRunV2ConditionRevisionReasonEnum = "CUSTOMIZED_PATH_RESPONSE_PENDING"
	GoogleCloudRunV2ConditionRevisionReasonEnumMinInstancesNotProvisioned    GoogleCloudRunV2ConditionRevisionReasonEnum = "MIN_INSTANCES_NOT_PROVISIONED"
	GoogleCloudRunV2ConditionRevisionReasonEnumActiveRevisionLimitReached    GoogleCloudRunV2ConditionRevisionReasonEnum = "ACTIVE_REVISION_LIMIT_REACHED"
	GoogleCloudRunV2ConditionRevisionReasonEnumNoDeployment                  GoogleCloudRunV2ConditionRevisionReasonEnum = "NO_DEPLOYMENT"
	GoogleCloudRunV2ConditionRevisionReasonEnumHealthCheckSkipped            GoogleCloudRunV2ConditionRevisionReasonEnum = "HEALTH_CHECK_SKIPPED"
)

type GoogleCloudRunV2ConditionSeverityEnum string

const (
	GoogleCloudRunV2ConditionSeverityEnumSeverityUnspecified GoogleCloudRunV2ConditionSeverityEnum = "SEVERITY_UNSPECIFIED"
	GoogleCloudRunV2ConditionSeverityEnumError               GoogleCloudRunV2ConditionSeverityEnum = "ERROR"
	GoogleCloudRunV2ConditionSeverityEnumWarning             GoogleCloudRunV2ConditionSeverityEnum = "WARNING"
	GoogleCloudRunV2ConditionSeverityEnumInfo                GoogleCloudRunV2ConditionSeverityEnum = "INFO"
)

type GoogleCloudRunV2ConditionStateEnum string

const (
	GoogleCloudRunV2ConditionStateEnumStateUnspecified     GoogleCloudRunV2ConditionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudRunV2ConditionStateEnumConditionPending     GoogleCloudRunV2ConditionStateEnum = "CONDITION_PENDING"
	GoogleCloudRunV2ConditionStateEnumConditionReconciling GoogleCloudRunV2ConditionStateEnum = "CONDITION_RECONCILING"
	GoogleCloudRunV2ConditionStateEnumConditionFailed      GoogleCloudRunV2ConditionStateEnum = "CONDITION_FAILED"
	GoogleCloudRunV2ConditionStateEnumConditionSucceeded   GoogleCloudRunV2ConditionStateEnum = "CONDITION_SUCCEEDED"
)

type GoogleCloudRunV2Condition struct {
	ExecutionReason    *GoogleCloudRunV2ConditionExecutionReasonEnum `json:"executionReason"`
	LastTransitionTime *string                                       `json:"lastTransitionTime"`
	Message            *string                                       `json:"message"`
	Reason             *GoogleCloudRunV2ConditionReasonEnum          `json:"reason"`
	RevisionReason     *GoogleCloudRunV2ConditionRevisionReasonEnum  `json:"revisionReason"`
	Severity           *GoogleCloudRunV2ConditionSeverityEnum        `json:"severity"`
	State              *GoogleCloudRunV2ConditionStateEnum           `json:"state"`
	Type               *string                                       `json:"type"`
}
