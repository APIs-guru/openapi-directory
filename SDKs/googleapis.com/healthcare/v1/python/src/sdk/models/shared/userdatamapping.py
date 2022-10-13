from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class UserDataMapping:
    archive_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveTime' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    data_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAttributes' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
