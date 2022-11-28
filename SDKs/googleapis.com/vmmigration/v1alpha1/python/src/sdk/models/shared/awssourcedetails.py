from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsSourceDetailsStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    FAILED = "FAILED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class AwsSourceDetails:
    r"""AwsSourceDetails
    AwsSourceDetails message describes a specific source details for the AWS source type.
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    inventory_security_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySecurityGroupNames') }})
    inventory_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryTags') }})
    migration_resources_user_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationResourcesUserTags') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIp') }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    state: Optional[AwsSourceDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class AwsSourceDetailsInput:
    r"""AwsSourceDetailsInput
    AwsSourceDetails message describes a specific source details for the AWS source type.
    """
    
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    inventory_security_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySecurityGroupNames') }})
    inventory_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryTags') }})
    migration_resources_user_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migrationResourcesUserTags') }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    
