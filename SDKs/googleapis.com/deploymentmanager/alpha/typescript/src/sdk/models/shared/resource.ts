import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAccessControl } from "./resourceaccesscontrol";
import { Credential } from "./credential";
import { ResourceUpdate } from "./resourceupdate";


export enum ResourceRuntimePoliciesEnum {
    Create = "CREATE",
    Delete = "DELETE",
    UpdateOnChange = "UPDATE_ON_CHANGE",
    UpdateAlways = "UPDATE_ALWAYS"
}

export enum ResourceWarningsCodeEnum {
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


export class ResourceWarningsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ResourceWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ResourceWarningsCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: ResourceWarningsData })
  data?: ResourceWarningsData[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessControl" })
  accessControl?: ResourceAccessControl;

  @SpeakeasyMetadata({ data: "json, name=finalProperties" })
  finalProperties?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUsedCredential" })
  lastUsedCredential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimePolicies" })
  runtimePolicies?: ResourceRuntimePoliciesEnum[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: ResourceUpdate;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ResourceWarnings })
  warnings?: ResourceWarnings[];
}
