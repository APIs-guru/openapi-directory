import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OperationErrorErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


// OperationError
/** 
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
**/
export class OperationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.OperationErrorErrors })
  errors?: OperationErrorErrors[];
}

export enum OperationStatusEnum {
    Pending = "PENDING"
,    Running = "RUNNING"
,    Done = "DONE"
}

export enum OperationWarningsCodeEnum {
    DeprecatedResourceUsed = "DEPRECATED_RESOURCE_USED"
,    NoResultsOnPage = "NO_RESULTS_ON_PAGE"
,    Unreachable = "UNREACHABLE"
,    NextHopAddressNotAssigned = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
,    NextHopInstanceNotFound = "NEXT_HOP_INSTANCE_NOT_FOUND"
,    NextHopInstanceNotOnNetwork = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
,    NextHopCannotIpForward = "NEXT_HOP_CANNOT_IP_FORWARD"
,    NextHopNotRunning = "NEXT_HOP_NOT_RUNNING"
,    InjectedKernelsDeprecated = "INJECTED_KERNELS_DEPRECATED"
,    RequiredTosAgreement = "REQUIRED_TOS_AGREEMENT"
,    DiskSizeLargerThanImageSize = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
,    ResourceNotDeleted = "RESOURCE_NOT_DELETED"
,    SingleInstancePropertyTemplate = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
,    NotCriticalError = "NOT_CRITICAL_ERROR"
,    CleanupFailed = "CLEANUP_FAILED"
,    FieldValueOverriden = "FIELD_VALUE_OVERRIDEN"
,    ResourceInUseByOtherResourceWarning = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
,    MissingTypeDependency = "MISSING_TYPE_DEPENDENCY"
,    ExternalApiWarning = "EXTERNAL_API_WARNING"
,    SchemaValidationIgnored = "SCHEMA_VALIDATION_IGNORED"
,    UndeclaredProperties = "UNDECLARED_PROPERTIES"
,    ExperimentalTypeUsed = "EXPERIMENTAL_TYPE_USED"
,    DeprecatedTypeUsed = "DEPRECATED_TYPE_USED"
,    PartialSuccess = "PARTIAL_SUCCESS"
,    LargeDeploymentWarning = "LARGE_DEPLOYMENT_WARNING"
,    NextHopInstanceHasNoIpv6Interface = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
,    InvalidHealthCheckForDynamicWieghtedLb = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"
}


export class OperationWarningsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class OperationWarnings extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: OperationWarningsCodeEnum;

  @Metadata({ data: "json, name=data", elemType: shared.OperationWarningsData })
  data?: OperationWarningsData[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


// Operation
/** 
 * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
**/
export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientOperationId" })
  clientOperationId?: string;

  @Metadata({ data: "json, name=creationTimestamp" })
  creationTimestamp?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: OperationError;

  @Metadata({ data: "json, name=httpErrorMessage" })
  httpErrorMessage?: string;

  @Metadata({ data: "json, name=httpErrorStatusCode" })
  httpErrorStatusCode?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operationGroupId" })
  operationGroupId?: string;

  @Metadata({ data: "json, name=operationType" })
  operationType?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=targetLink" })
  targetLink?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.OperationWarnings })
  warnings?: OperationWarnings[];

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
