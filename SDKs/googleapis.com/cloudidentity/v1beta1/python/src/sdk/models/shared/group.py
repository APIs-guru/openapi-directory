from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupInput:
    r"""GroupInput
    A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dynamic_group_metadata: Optional[DynamicGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicGroupMetadata') }})
    group_key: Optional[EntityKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    posix_groups: Optional[List[PosixGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixGroups') }})
    

@dataclass_json
@dataclass
class Group:
    r"""Group
    A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    dynamic_group_metadata: Optional[DynamicGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicGroupMetadata') }})
    group_key: Optional[EntityKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    posix_groups: Optional[List[PosixGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixGroups') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
