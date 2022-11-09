import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceAccessControl } from "./resourceaccesscontrol";
import { Credential } from "./credential";
export declare class ResourceUpdateErrorErrors extends SpeakeasyBase {
    code?: string;
    location?: string;
    message?: string;
}
/**
 * Output only. If errors are generated during update of the resource, this field will be populated.
**/
export declare class ResourceUpdateError extends SpeakeasyBase {
    errors?: ResourceUpdateErrorErrors[];
}
export declare enum ResourceUpdateIntentEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Delete = "DELETE",
    Acquire = "ACQUIRE",
    Update = "UPDATE",
    Abandon = "ABANDON",
    Create = "CREATE"
}
export declare enum ResourceUpdateRuntimePoliciesEnum {
    Create = "CREATE",
    Delete = "DELETE",
    UpdateOnChange = "UPDATE_ON_CHANGE",
    UpdateAlways = "UPDATE_ALWAYS"
}
export declare enum ResourceUpdateStateEnum {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    InPreview = "IN_PREVIEW",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
export declare enum ResourceUpdateWarningsCodeEnum {
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
export declare class ResourceUpdateWarningsData extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class ResourceUpdateWarnings extends SpeakeasyBase {
    code?: ResourceUpdateWarningsCodeEnum;
    data?: ResourceUpdateWarningsData[];
    message?: string;
}
export declare class ResourceUpdate extends SpeakeasyBase {
    accessControl?: ResourceAccessControl;
    credential?: Credential;
    error?: ResourceUpdateError;
    finalProperties?: string;
    intent?: ResourceUpdateIntentEnum;
    manifest?: string;
    properties?: string;
    runtimePolicies?: ResourceUpdateRuntimePoliciesEnum[];
    state?: ResourceUpdateStateEnum;
    warnings?: ResourceUpdateWarnings[];
}
