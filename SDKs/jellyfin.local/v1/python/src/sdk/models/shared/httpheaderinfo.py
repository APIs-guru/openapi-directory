from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import headermatchtype_enum


@dataclass_json
@dataclass
class HTTPHeaderInfo:
    match: Optional[headermatchtype_enum.HeaderMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Match' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
