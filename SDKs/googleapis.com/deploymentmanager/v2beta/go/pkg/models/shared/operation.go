package shared

type OperationErrorErrors struct {
	Code     *string `json:"code"`
	Location *string `json:"location"`
	Message  *string `json:"message"`
}

type OperationError struct {
	Errors []OperationErrorErrors `json:"errors"`
}

type OperationStatusEnum string

const (
	OperationStatusEnumPending OperationStatusEnum = "PENDING"
	OperationStatusEnumRunning OperationStatusEnum = "RUNNING"
	OperationStatusEnumDone    OperationStatusEnum = "DONE"
)

type OperationWarningsCodeEnum string

const (
	OperationWarningsCodeEnumDeprecatedResourceUsed                 OperationWarningsCodeEnum = "DEPRECATED_RESOURCE_USED"
	OperationWarningsCodeEnumNoResultsOnPage                        OperationWarningsCodeEnum = "NO_RESULTS_ON_PAGE"
	OperationWarningsCodeEnumUnreachable                            OperationWarningsCodeEnum = "UNREACHABLE"
	OperationWarningsCodeEnumNextHopAddressNotAssigned              OperationWarningsCodeEnum = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
	OperationWarningsCodeEnumNextHopInstanceNotFound                OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_FOUND"
	OperationWarningsCodeEnumNextHopInstanceNotOnNetwork            OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
	OperationWarningsCodeEnumNextHopCannotIPForward                 OperationWarningsCodeEnum = "NEXT_HOP_CANNOT_IP_FORWARD"
	OperationWarningsCodeEnumNextHopNotRunning                      OperationWarningsCodeEnum = "NEXT_HOP_NOT_RUNNING"
	OperationWarningsCodeEnumInjectedKernelsDeprecated              OperationWarningsCodeEnum = "INJECTED_KERNELS_DEPRECATED"
	OperationWarningsCodeEnumRequiredTosAgreement                   OperationWarningsCodeEnum = "REQUIRED_TOS_AGREEMENT"
	OperationWarningsCodeEnumDiskSizeLargerThanImageSize            OperationWarningsCodeEnum = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
	OperationWarningsCodeEnumResourceNotDeleted                     OperationWarningsCodeEnum = "RESOURCE_NOT_DELETED"
	OperationWarningsCodeEnumSingleInstancePropertyTemplate         OperationWarningsCodeEnum = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
	OperationWarningsCodeEnumNotCriticalError                       OperationWarningsCodeEnum = "NOT_CRITICAL_ERROR"
	OperationWarningsCodeEnumCleanupFailed                          OperationWarningsCodeEnum = "CLEANUP_FAILED"
	OperationWarningsCodeEnumFieldValueOverriden                    OperationWarningsCodeEnum = "FIELD_VALUE_OVERRIDEN"
	OperationWarningsCodeEnumResourceInUseByOtherResourceWarning    OperationWarningsCodeEnum = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
	OperationWarningsCodeEnumMissingTypeDependency                  OperationWarningsCodeEnum = "MISSING_TYPE_DEPENDENCY"
	OperationWarningsCodeEnumExternalAPIWarning                     OperationWarningsCodeEnum = "EXTERNAL_API_WARNING"
	OperationWarningsCodeEnumSchemaValidationIgnored                OperationWarningsCodeEnum = "SCHEMA_VALIDATION_IGNORED"
	OperationWarningsCodeEnumUndeclaredProperties                   OperationWarningsCodeEnum = "UNDECLARED_PROPERTIES"
	OperationWarningsCodeEnumExperimentalTypeUsed                   OperationWarningsCodeEnum = "EXPERIMENTAL_TYPE_USED"
	OperationWarningsCodeEnumDeprecatedTypeUsed                     OperationWarningsCodeEnum = "DEPRECATED_TYPE_USED"
	OperationWarningsCodeEnumPartialSuccess                         OperationWarningsCodeEnum = "PARTIAL_SUCCESS"
	OperationWarningsCodeEnumLargeDeploymentWarning                 OperationWarningsCodeEnum = "LARGE_DEPLOYMENT_WARNING"
	OperationWarningsCodeEnumNextHopInstanceHasNoIpv6Interface      OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
	OperationWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb OperationWarningsCodeEnum = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
)

type OperationWarningsData struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type OperationWarnings struct {
	Code    *OperationWarningsCodeEnum `json:"code"`
	Data    []OperationWarningsData    `json:"data"`
	Message *string                    `json:"message"`
}

type Operation struct {
	ClientOperationID   *string              `json:"clientOperationId"`
	CreationTimestamp   *string              `json:"creationTimestamp"`
	Description         *string              `json:"description"`
	EndTime             *string              `json:"endTime"`
	Error               *OperationError      `json:"error"`
	HTTPErrorMessage    *string              `json:"httpErrorMessage"`
	HTTPErrorStatusCode *int32               `json:"httpErrorStatusCode"`
	ID                  *string              `json:"id"`
	InsertTime          *string              `json:"insertTime"`
	Kind                *string              `json:"kind"`
	Name                *string              `json:"name"`
	OperationGroupID    *string              `json:"operationGroupId"`
	OperationType       *string              `json:"operationType"`
	Progress            *int32               `json:"progress"`
	Region              *string              `json:"region"`
	SelfLink            *string              `json:"selfLink"`
	StartTime           *string              `json:"startTime"`
	Status              *OperationStatusEnum `json:"status"`
	StatusMessage       *string              `json:"statusMessage"`
	TargetID            *string              `json:"targetId"`
	TargetLink          *string              `json:"targetLink"`
	User                *string              `json:"user"`
	Warnings            []OperationWarnings  `json:"warnings"`
	Zone                *string              `json:"zone"`
}
