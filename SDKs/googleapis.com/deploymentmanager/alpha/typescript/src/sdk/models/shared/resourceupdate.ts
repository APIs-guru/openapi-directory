import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAccessControl } from "./resourceaccesscontrol";
import { Credential } from "./credential";



export class ResourceUpdateErrorErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// ResourceUpdateError
/** 
 * Output only. If errors are generated during update of the resource, this field will be populated.
**/
export class ResourceUpdateError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ResourceUpdateErrorErrors })
  errors?: ResourceUpdateErrorErrors[];
}

export enum ResourceUpdateIntentEnum {
    CreateOrAcquire = "CREATE_OR_ACQUIRE",
    Delete = "DELETE",
    Acquire = "ACQUIRE",
    Update = "UPDATE",
    Abandon = "ABANDON",
    Create = "CREATE"
}

export enum ResourceUpdateRuntimePoliciesEnum {
    Create = "CREATE",
    Delete = "DELETE",
    UpdateOnChange = "UPDATE_ON_CHANGE",
    UpdateAlways = "UPDATE_ALWAYS"
}

export enum ResourceUpdateStateEnum {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    InPreview = "IN_PREVIEW",
    Failed = "FAILED",
    Aborted = "ABORTED"
}

export enum ResourceUpdateWarningsCodeEnum {
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


export class ResourceUpdateWarningsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ResourceUpdateWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ResourceUpdateWarningsCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceUpdateWarningsData })
  data?: ResourceUpdateWarningsData[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ResourceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessControl" })
  accessControl?: ResourceAccessControl;

  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ResourceUpdateError;

  @SpeakeasyMetadata({ data: "json, name=finalProperties" })
  finalProperties?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: ResourceUpdateIntentEnum;

  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimePolicies" })
  runtimePolicies?: ResourceUpdateRuntimePoliciesEnum[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ResourceUpdateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ResourceUpdateWarnings })
  warnings?: ResourceUpdateWarnings[];
}
