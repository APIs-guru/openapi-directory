import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OperationErrorErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// OperationError
/** 
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
**/
export class OperationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: OperationErrorErrors })
  errors?: OperationErrorErrors[];
}

export enum OperationStatusEnum {
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE"
}

export enum OperationWarningsCodeEnum {
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


export class OperationWarningsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class OperationWarnings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: OperationWarningsCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: OperationWarningsData })
  data?: OperationWarningsData[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// Operation
/** 
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
**/
export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientOperationId" })
  clientOperationId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: OperationError;

  @SpeakeasyMetadata({ data: "json, name=httpErrorMessage" })
  httpErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=httpErrorStatusCode" })
  httpErrorStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationGroupId" })
  operationGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetLink" })
  targetLink?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: OperationWarnings })
  warnings?: OperationWarnings[];

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
