from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessReview:
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ns' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    subresource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource' }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verb' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
