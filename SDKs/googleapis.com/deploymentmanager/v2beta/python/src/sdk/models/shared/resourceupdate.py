from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceUpdateErrorErrors:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ResourceUpdateError:
    r"""ResourceUpdateError
    Output only. If errors are generated during update of the resource, this field will be populated.
    """
    
    errors: Optional[List[ResourceUpdateErrorErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
class ResourceUpdateIntentEnum(str, Enum):
    CREATE_OR_ACQUIRE = "CREATE_OR_ACQUIRE"
    DELETE = "DELETE"
    ACQUIRE = "ACQUIRE"
    UPDATE = "UPDATE"
    ABANDON = "ABANDON"
    CREATE = "CREATE"

class ResourceUpdateStateEnum(str, Enum):
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    IN_PREVIEW = "IN_PREVIEW"
    FAILED = "FAILED"
    ABORTED = "ABORTED"

class ResourceUpdateWarningsCodeEnum(str, Enum):
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
class ResourceUpdateWarningsData:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ResourceUpdateWarnings:
    code: Optional[ResourceUpdateWarningsCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[List[ResourceUpdateWarningsData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ResourceUpdate:
    access_control: Optional[ResourceAccessControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControl') }})
    error: Optional[ResourceUpdateError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    final_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalProperties') }})
    intent: Optional[ResourceUpdateIntentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    state: Optional[ResourceUpdateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    warnings: Optional[List[ResourceUpdateWarnings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
