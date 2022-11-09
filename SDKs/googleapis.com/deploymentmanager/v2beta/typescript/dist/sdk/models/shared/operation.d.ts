import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OperationErrorErrors extends SpeakeasyBase {
    code?: string;
    location?: string;
    message?: string;
}
/**
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
**/
export declare class OperationError extends SpeakeasyBase {
    errors?: OperationErrorErrors[];
}
export declare enum OperationStatusEnum {
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE"
}
export declare enum OperationWarningsCodeEnum {
    DeprecatedResourceUsed = "DEPRECATED_RESOURCE_USED",
    NoResultsOnPage = "NO_RESULTS_ON_PAGE",
    Unreachable = "UNREACHABLE",
    NextHopAddressNotAssigned = "NEXT_HOP_ADDRESS_NOT_ASSIGNED",
    NextHopInstanceNotFound = "NEXT_HOP_INSTANCE_NOT_FOUND",
    NextHopInstanceNotOnNetwork = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK",
    NextHopCannotIpForward = "NEXT_HOP_CANNOT_IP_FORWARD",
    NextHopNotRunning = "NEXT_HOP_NOT_RUNNING",
    InjectedKernelsDeprecated = "INJECTED_KERNELS_DEPRECATED",
    RequiredTosAgreement = "REQUIRED_TOS_AGREEMENT",
    DiskSizeLargerThanImageSize = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE",
    ResourceNotDeleted = "RESOURCE_NOT_DELETED",
    SingleInstancePropertyTemplate = "SINGLE_INSTANCE_PROPERTY_TEMPLATE",
    NotCriticalError = "NOT_CRITICAL_ERROR",
    CleanupFailed = "CLEANUP_FAILED",
    FieldValueOverriden = "FIELD_VALUE_OVERRIDEN",
    ResourceInUseByOtherResourceWarning = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING",
    MissingTypeDependency = "MISSING_TYPE_DEPENDENCY",
    ExternalApiWarning = "EXTERNAL_API_WARNING",
    SchemaValidationIgnored = "SCHEMA_VALIDATION_IGNORED",
    UndeclaredProperties = "UNDECLARED_PROPERTIES",
    ExperimentalTypeUsed = "EXPERIMENTAL_TYPE_USED",
    DeprecatedTypeUsed = "DEPRECATED_TYPE_USED",
    PartialSuccess = "PARTIAL_SUCCESS",
    LargeDeploymentWarning = "LARGE_DEPLOYMENT_WARNING",
    NextHopInstanceHasNoIpv6Interface = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE",
    InvalidHealthCheckForDynamicWieghtedLb = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
}
export declare class OperationWarningsData extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class OperationWarnings extends SpeakeasyBase {
    code?: OperationWarningsCodeEnum;
    data?: OperationWarningsData[];
    message?: string;
}
/**
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
**/
export declare class Operation extends SpeakeasyBase {
    clientOperationId?: string;
    creationTimestamp?: string;
    description?: string;
    endTime?: string;
    error?: OperationError;
    httpErrorMessage?: string;
    httpErrorStatusCode?: number;
    id?: string;
    insertTime?: string;
    kind?: string;
    name?: string;
    operationGroupId?: string;
    operationType?: string;
    progress?: number;
    region?: string;
    selfLink?: string;
    startTime?: string;
    status?: OperationStatusEnum;
    statusMessage?: string;
    targetId?: string;
    targetLink?: string;
    user?: string;
    warnings?: OperationWarnings[];
    zone?: string;
}
