from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OperationErrorErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class OperationError:
    r"""OperationError
    [Output Only] If errors are generated during processing of the operation, this field will be populated.
    """
    
    errors: Optional[List[OperationErrorErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
class OperationStatusEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DONE = "DONE"

class OperationWarningsCodeEnum(str, Enum):
    DEPRECATED_RESOURCE_USED = "DEPRECATED_RESOURCE_USED"
    NO_RESULTS_ON_PAGE = "NO_RESULTS_ON_PAGE"
    UNREACHABLE = "UNREACHABLE"
    NEXT_HOP_ADDRESS_NOT_ASSIGNED = "NEXT_HOP_ADDRESS_NOT_ASSIGNED"
    NEXT_HOP_INSTANCE_NOT_FOUND = "NEXT_HOP_INSTANCE_NOT_FOUND"
    NEXT_HOP_INSTANCE_NOT_ON_NETWORK = "NEXT_HOP_INSTANCE_NOT_ON_NETWORK"
    NEXT_HOP_CANNOT_IP_FORWARD = "NEXT_HOP_CANNOT_IP_FORWARD"
    NEXT_HOP_NOT_RUNNING = "NEXT_HOP_NOT_RUNNING"
    INJECTED_KERNELS_DEPRECATED = "INJECTED_KERNELS_DEPRECATED"
    REQUIRED_TOS_AGREEMENT = "REQUIRED_TOS_AGREEMENT"
    DISK_SIZE_LARGER_THAN_IMAGE_SIZE = "DISK_SIZE_LARGER_THAN_IMAGE_SIZE"
    RESOURCE_NOT_DELETED = "RESOURCE_NOT_DELETED"
    SINGLE_INSTANCE_PROPERTY_TEMPLATE = "SINGLE_INSTANCE_PROPERTY_TEMPLATE"
    NOT_CRITICAL_ERROR = "NOT_CRITICAL_ERROR"
    CLEANUP_FAILED = "CLEANUP_FAILED"
    FIELD_VALUE_OVERRIDEN = "FIELD_VALUE_OVERRIDEN"
    RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING = "RESOURCE_IN_USE_BY_OTHER_RESOURCE_WARNING"
    MISSING_TYPE_DEPENDENCY = "MISSING_TYPE_DEPENDENCY"
    EXTERNAL_API_WARNING = "EXTERNAL_API_WARNING"
    SCHEMA_VALIDATION_IGNORED = "SCHEMA_VALIDATION_IGNORED"
    UNDECLARED_PROPERTIES = "UNDECLARED_PROPERTIES"
    EXPERIMENTAL_TYPE_USED = "EXPERIMENTAL_TYPE_USED"
    DEPRECATED_TYPE_USED = "DEPRECATED_TYPE_USED"
    PARTIAL_SUCCESS = "PARTIAL_SUCCESS"
    LARGE_DEPLOYMENT_WARNING = "LARGE_DEPLOYMENT_WARNING"
    NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE = "NEXT_HOP_INSTANCE_HAS_NO_IPV6_INTERFACE"
    INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB = "INVALID_HEALTH_CHECK_FOR_DYNAMIC_WIEGHTED_LB"


@dataclass_json
@dataclass
class OperationWarningsData:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class OperationWarnings:
    code: Optional[OperationWarningsCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[List[OperationWarningsData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class Operation:
    r"""Operation
    Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
    """
    
    client_operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientOperationId') }})
    creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTimestamp') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[OperationError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    http_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpErrorMessage') }})
    http_error_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpErrorStatusCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationGroupId') }})
    operation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationType') }})
    progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[OperationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    target_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLink') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    warnings: Optional[List[OperationWarnings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
