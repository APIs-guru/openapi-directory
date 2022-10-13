from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Job:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    report_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTypeId' }})
    system_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemManaged' }})
    
