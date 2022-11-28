from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ResourceRuntimePoliciesEnum(str, Enum):
    CREATE = "CREATE"
    DELETE = "DELETE"
    UPDATE_ON_CHANGE = "UPDATE_ON_CHANGE"
    UPDATE_ALWAYS = "UPDATE_ALWAYS"

class ResourceWarningsCodeEnum(str, Enum):
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
class ResourceWarningsData:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ResourceWarnings:
    code: Optional[ResourceWarningsCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[List[ResourceWarningsData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class Resource:
    access_control: Optional[ResourceAccessControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControl') }})
    final_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalProperties') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    last_used_credential: Optional[Credential] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUsedCredential') }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    runtime_policies: Optional[List[ResourceRuntimePoliciesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimePolicies') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update: Optional[ResourceUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    warnings: Optional[List[ResourceWarnings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
