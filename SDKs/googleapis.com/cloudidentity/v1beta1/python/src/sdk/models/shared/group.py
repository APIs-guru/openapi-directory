from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamicgroupmetadata
from . import entitykey
from . import posixgroup


@dataclass_json
@dataclass
class Group:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    dynamic_group_metadata: Optional[dynamicgroupmetadata.DynamicGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicGroupMetadata' }})
    group_key: Optional[entitykey.EntityKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupKey' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    posix_groups: Optional[List[posixgroup.PosixGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posixGroups' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
