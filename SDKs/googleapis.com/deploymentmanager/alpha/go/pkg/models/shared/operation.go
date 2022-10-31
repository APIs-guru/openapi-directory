package shared



type OperationErrorErrors struct {
    Code *string `json:"code,omitempty"`
    Location *string `json:"location,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type OperationError struct {
    Errors []OperationErrorErrors `json:"errors,omitempty"`
    
}


type OperationStatusEnum string

const (
    OperationStatusEnumPending OperationStatusEnum = "PENDING"
OperationStatusEnumRunning OperationStatusEnum = "RUNNING"
OperationStatusEnumDone OperationStatusEnum = "DONE"
)



type OperationWarningsCodeEnum string

const (
    OperationWarningsCodeEnumDeprecatedResourceUsed OperationWarningsCodeEnum = "DEPRECATED_RESOURCE_USED"
OperationWarningsCodeEnumNoResultsOnPage OperationWarningsCodeEnum = "NO_RESULTS_ON_PAGE"
OperationWarningsCodeEnumUnreachable OperationWarningsCodeEnum = "UNREACHABLE"
OperationWarningsCodeEnumNextHopAddressNotAssigned OperationWarningsCodeEnum = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
OperationWarningsCodeEnumNextHopInstanceNotFound OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_FOUND"
OperationWarningsCodeEnumNextHopInstanceNotOnNetwork OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
OperationWarningsCodeEnumNextHopCannotIPForward OperationWarningsCodeEnum = "NEXT_HOP_CANNOT_IP_FORWARD"
OperationWarningsCodeEnumNextHopNotRunning OperationWarningsCodeEnum = "NEXT_HOP_NOT_RUNNING"
OperationWarningsCodeEnumInjectedKernelsDeprecated OperationWarningsCodeEnum = "INJECTED_KERNELS_DEPRECATED"
OperationWarningsCodeEnumRequiredTosAgreement OperationWarningsCodeEnum = "REQUIRED_TOS_AGREEMENT"
OperationWarningsCodeEnumDiskSizeLargerThanImageSize OperationWarningsCodeEnum = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
OperationWarningsCodeEnumResourceNotDeleted OperationWarningsCodeEnum = "RESOURCE_NOT_DELETED"
OperationWarningsCodeEnumSingleInstancePropertyTemplate OperationWarningsCodeEnum = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
OperationWarningsCodeEnumNotCriticalError OperationWarningsCodeEnum = "NOT_CRITICAL_ERROR"
OperationWarningsCodeEnumCleanupFailed OperationWarningsCodeEnum = "CLEANUP_FAILED"
OperationWarningsCodeEnumFieldValueOverriden OperationWarningsCodeEnum = "FIELD_VALUE_OVERRIDEN"
OperationWarningsCodeEnumResourceInUseByOtherResourceWarning OperationWarningsCodeEnum = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
OperationWarningsCodeEnumMissingTypeDependency OperationWarningsCodeEnum = "MISSING_TYPE_DEPENDENCY"
OperationWarningsCodeEnumExternalAPIWarning OperationWarningsCodeEnum = "EXTERNAL_API_WARNING"
OperationWarningsCodeEnumSchemaValidationIgnored OperationWarningsCodeEnum = "SCHEMA_VALIDATION_IGNORED"
OperationWarningsCodeEnumUndeclaredProperties OperationWarningsCodeEnum = "UNDECLARED_PROPERTIES"
OperationWarningsCodeEnumExperimentalTypeUsed OperationWarningsCodeEnum = "EXPERIMENTAL_TYPE_USED"
OperationWarningsCodeEnumDeprecatedTypeUsed OperationWarningsCodeEnum = "DEPRECATED_TYPE_USED"
OperationWarningsCodeEnumPartialSuccess OperationWarningsCodeEnum = "PARTIAL_SUCCESS"
OperationWarningsCodeEnumLargeDeploymentWarning OperationWarningsCodeEnum = "LARGE_DEPLOYMENT_WARNING"
OperationWarningsCodeEnumNextHopInstanceHasNoIpv6Interface OperationWarningsCodeEnum = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
OperationWarningsCodeEnumInvalidHealthCheckForDynamicWieghtedLb OperationWarningsCodeEnum = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
)


type OperationWarningsData struct {
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type OperationWarnings struct {
    Code *OperationWarningsCodeEnum `json:"code,omitempty"`
    Data []OperationWarningsData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type Operation struct {
    ClientOperationID *string `json:"clientOperationId,omitempty"`
    CreationTimestamp *string `json:"creationTimestamp,omitempty"`
    Description *string `json:"description,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Error *OperationError `json:"error,omitempty"`
    HTTPErrorMessage *string `json:"httpErrorMessage,omitempty"`
    HTTPErrorStatusCode *int32 `json:"httpErrorStatusCode,omitempty"`
    ID *string `json:"id,omitempty"`
    InsertTime *string `json:"insertTime,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    OperationGroupID *string `json:"operationGroupId,omitempty"`
    OperationType *string `json:"operationType,omitempty"`
    Progress *int32 `json:"progress,omitempty"`
    Region *string `json:"region,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *OperationStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    TargetID *string `json:"targetId,omitempty"`
    TargetLink *string `json:"targetLink,omitempty"`
    User *string `json:"user,omitempty"`
    Warnings []OperationWarnings `json:"warnings,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

