from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountStatusItemLevelIssue:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeName' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    num_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numItems' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    servability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servability' }})
    
