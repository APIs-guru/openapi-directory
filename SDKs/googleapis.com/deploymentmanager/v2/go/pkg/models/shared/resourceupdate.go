package shared

type ResourceUpdateErrorErrors struct {
	Code     *string `json:"code"`
	Location *string `json:"location"`
	Message  *string `json:"message"`
}

type ResourceUpdateError struct {
	Errors []ResourceUpdateErrorErrors `json:"errors"`
}

type ResourceUpdateIntentEnum string

const (
	ResourceUpdateIntentEnumCreateOrAcquire ResourceUpdateIntentEnum = "CREATE_OR_ACQUIRE"
	ResourceUpdateIntentEnumDelete          ResourceUpdateIntentEnum = "DELETE"
	ResourceUpdateIntentEnumAcquire         ResourceUpdateIntentEnum = "ACQUIRE"
	ResourceUpdateIntentEnumUpdate          ResourceUpdateIntentEnum = "UPDATE"
	ResourceUpdateIntentEnumAbandon         ResourceUpdateIntentEnum = "ABANDON"
	ResourceUpdateIntentEnumCreate          ResourceUpdateIntentEnum = "CREATE"
)

type ResourceUpdateStateEnum string

const (
	ResourceUpdateStateEnumPending    ResourceUpdateStateEnum = "PENDING"
	ResourceUpdateStateEnumInProgress ResourceUpdateStateEnum = "IN_PROGRESS"
	ResourceUpdateStateEnumInPreview  ResourceUpdateStateEnum = "IN_PREVIEW"
	ResourceUpdateStateEnumFailed     ResourceUpdateStateEnum = "FAILED"
	ResourceUpdateStateEnumAborted    ResourceUpdateStateEnum = "ABORTED"
)

type ResourceUpdateWarningsCodeEnum string

const (
	ResourceUpdateWarningsCodeEnumDeprecatedResourceUsed                 ResourceUpdateWarningsCodeEnum = "DEPRECATED_RESOURCE_USED"
	ResourceUpdateWarningsCodeEnumNoResultsOnPage                        ResourceUpdateWarningsCodeEnum = "NO_RESULTS_ON_PAGE"
	ResourceUpdateWarningsCodeEnumUnreachable                            ResourceUpdateWarningsCodeEnum = "UNREACHABLE"
	ResourceUpdateWarningsCodeEnumNextHopAddressNotAssigned              ResourceUpdateWarningsCodeEnum = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
	ResourceUpdateWarningsCodeEnumNextHopInstanceNotFound                ResourceUpdateWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_FOUND"
	ResourceUpdateWarningsCodeEnumNextHopInstanceNotOnNetwork            ResourceUpdateWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
	ResourceUpdateWarningsCodeEnumNextHopCannotIPForward                 ResourceUpdateWarningsCodeEnum = "NEXT_HOP_CANNOT_IP_FORWARD"
	ResourceUpdateWarningsCodeEnumNextHopNotRunning                      ResourceUpdateWarningsCodeEnum = "NEXT_HOP_NOT_RUNNING"
	ResourceUpdateWarningsCodeEnumInjectedKernelsDeprecated              ResourceUpdateWarningsCodeEnum = "INJECTED_KERNELS_DEPRECATED"
	ResourceUpdateWarningsCodeEnumRequiredTosAgreement                   ResourceUpdateWarningsCodeEnum = "REQUIRED_TOS_AGREEMENT"
	ResourceUpdateWarningsCodeEnumDiskSizeLargerThanImageSize            ResourceUpdateWarningsCodeEnum = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
	ResourceUpdateWarningsCodeEnumResourceNotDeleted                     ResourceUpdateWarningsCodeEnum = "RESOURCE_NOT_DELETED"
	ResourceUpdateWarningsCodeEnumSingleInstancePropertyTemplate         ResourceUpdateWarningsCodeEnum = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
	ResourceUpdateWarningsCodeEnumNotCriticalError                       ResourceUpdateWarningsCodeEnum = "NOT_CRITICAL_ERROR"
	ResourceUpdateWarningsCodeEnumCleanupFailed                          ResourceUpdateWarningsCodeEnum = "CLEANUP_FAILED"
	ResourceUpdateWarningsCodeEnumFieldValueOverriden                    ResourceUpdateWarningsCodeEnum = "FIELD_VALUE_OVERRIDEN"
	ResourceUpdateWarningsCodeEnumResourceInUseByOtherResourceWarning    ResourceUpdateWarningsCodeEnum = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
	ResourceUpdateWarningsCodeEnumMissingTypeDependency                  ResourceUpdateWarningsCodeEnum = "MISSING_TYPE_DEPENDENCY"
	ResourceUpdateWarningsCodeEnumExternalAPIWarning                     ResourceUpdateWarningsCodeEnum = "EXTERNAL_API_WARNING"
	ResourceUpdateWarningsCodeEnumSchemaValidationIgnored                ResourceUpdateWarningsCodeEnum = "SCHEMA_VALIDATION_IGNORED"
	ResourceUpdateWarningsCodeEnumUndeclaredProperties                   ResourceUpdateWarningsCodeEnum = "UNDECLARED_PROPERTIES"
	ResourceUpdateWarningsCodeEnumExperimentalTypeUsed                   ResourceUpdateWarningsCodeEnum = "EXPERIMENTAL_TYPE_USED"
	ResourceUpdateWarningsCodeEnumDeprecatedTypeUsed                     ResourceUpdateWarningsCodeEnum = "DEPRECATED_TYPE_USED"
	ResourceUpdateWarningsCodeEnumPartialSuccess                         ResourceUpdateWarningsCodeEnum = "PARTIAL_SUCCESS"
	ResourceUpdateWarningsCodeEnumLargeDeploymentWarning                 ResourceUpdateWarningsCodeEnum = "LARGE_DEPLOYMENT_WARNING"
	ResourceUpdateWarningsCodeEnumNextHopInstanceHasNoIpv6Interface      ResourceUpdateWarningsCodeEnum = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
	ResourceUpdateWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb ResourceUpdateWarningsCodeEnum = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
)

type ResourceUpdateWarningsData struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type ResourceUpdateWarnings struct {
	Code    *ResourceUpdateWarningsCodeEnum `json:"code"`
	Data    []ResourceUpdateWarningsData    `json:"data"`
	Message *string                         `json:"message"`
}

type ResourceUpdate struct {
	AccessControl   *ResourceAccessControl    `json:"accessControl"`
	Error           *ResourceUpdateError      `json:"error"`
	FinalProperties *string                   `json:"finalProperties"`
	Intent          *ResourceUpdateIntentEnum `json:"intent"`
	Manifest        *string                   `json:"manifest"`
	Properties      *string                   `json:"properties"`
	State           *ResourceUpdateStateEnum  `json:"state"`
	Warnings        []ResourceUpdateWarnings  `json:"warnings"`
}
