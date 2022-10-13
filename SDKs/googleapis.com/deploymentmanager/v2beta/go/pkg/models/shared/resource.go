package shared

type ResourceWarningsCodeEnum string

const (
	ResourceWarningsCodeEnumDeprecatedResourceUsed                 ResourceWarningsCodeEnum = "DEPRECATED_RESOURCE_USED"
	ResourceWarningsCodeEnumNoResultsOnPage                        ResourceWarningsCodeEnum = "NO_RESULTS_ON_PAGE"
	ResourceWarningsCodeEnumUnreachable                            ResourceWarningsCodeEnum = "UNREACHABLE"
	ResourceWarningsCodeEnumNextHopAddressNotAssigned              ResourceWarningsCodeEnum = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
	ResourceWarningsCodeEnumNextHopInstanceNotFound                ResourceWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_FOUND"
	ResourceWarningsCodeEnumNextHopInstanceNotOnNetwork            ResourceWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
	ResourceWarningsCodeEnumNextHopCannotIPForward                 ResourceWarningsCodeEnum = "NEXT_HOP_CANNOT_IP_FORWARD"
	ResourceWarningsCodeEnumNextHopNotRunning                      ResourceWarningsCodeEnum = "NEXT_HOP_NOT_RUNNING"
	ResourceWarningsCodeEnumInjectedKernelsDeprecated              ResourceWarningsCodeEnum = "INJECTED_KERNELS_DEPRECATED"
	ResourceWarningsCodeEnumRequiredTosAgreement                   ResourceWarningsCodeEnum = "REQUIRED_TOS_AGREEMENT"
	ResourceWarningsCodeEnumDiskSizeLargerThanImageSize            ResourceWarningsCodeEnum = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
	ResourceWarningsCodeEnumResourceNotDeleted                     ResourceWarningsCodeEnum = "RESOURCE_NOT_DELETED"
	ResourceWarningsCodeEnumSingleInstancePropertyTemplate         ResourceWarningsCodeEnum = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
	ResourceWarningsCodeEnumNotCriticalError                       ResourceWarningsCodeEnum = "NOT_CRITICAL_ERROR"
	ResourceWarningsCodeEnumCleanupFailed                          ResourceWarningsCodeEnum = "CLEANUP_FAILED"
	ResourceWarningsCodeEnumFieldValueOverriden                    ResourceWarningsCodeEnum = "FIELD_VALUE_OVERRIDEN"
	ResourceWarningsCodeEnumResourceInUseByOtherResourceWarning    ResourceWarningsCodeEnum = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
	ResourceWarningsCodeEnumMissingTypeDependency                  ResourceWarningsCodeEnum = "MISSING_TYPE_DEPENDENCY"
	ResourceWarningsCodeEnumExternalAPIWarning                     ResourceWarningsCodeEnum = "EXTERNAL_API_WARNING"
	ResourceWarningsCodeEnumSchemaValidationIgnored                ResourceWarningsCodeEnum = "SCHEMA_VALIDATION_IGNORED"
	ResourceWarningsCodeEnumUndeclaredProperties                   ResourceWarningsCodeEnum = "UNDECLARED_PROPERTIES"
	ResourceWarningsCodeEnumExperimentalTypeUsed                   ResourceWarningsCodeEnum = "EXPERIMENTAL_TYPE_USED"
	ResourceWarningsCodeEnumDeprecatedTypeUsed                     ResourceWarningsCodeEnum = "DEPRECATED_TYPE_USED"
	ResourceWarningsCodeEnumPartialSuccess                         ResourceWarningsCodeEnum = "PARTIAL_SUCCESS"
	ResourceWarningsCodeEnumLargeDeploymentWarning                 ResourceWarningsCodeEnum = "LARGE_DEPLOYMENT_WARNING"
	ResourceWarningsCodeEnumNextHopInstanceHasNoIpv6Interface      ResourceWarningsCodeEnum = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
	ResourceWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb ResourceWarningsCodeEnum = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
)

type ResourceWarningsData struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type ResourceWarnings struct {
	Code    *ResourceWarningsCodeEnum `json:"code"`
	Data    []ResourceWarningsData    `json:"data"`
	Message *string                   `json:"message"`
}

type Resource struct {
	AccessControl   *ResourceAccessControl `json:"accessControl"`
	FinalProperties *string                `json:"finalProperties"`
	ID              *string                `json:"id"`
	InsertTime      *string                `json:"insertTime"`
	Manifest        *string                `json:"manifest"`
	Name            *string                `json:"name"`
	Properties      *string                `json:"properties"`
	Type            *string                `json:"type"`
	Update          *ResourceUpdate        `json:"update"`
	UpdateTime      *string                `json:"updateTime"`
	URL             *string                `json:"url"`
	Warnings        []ResourceWarnings     `json:"warnings"`
}
