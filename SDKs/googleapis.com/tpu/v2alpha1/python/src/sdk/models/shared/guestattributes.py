from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import guestattributesvalue


@dataclass_json
@dataclass
class GuestAttributes:
    query_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryPath' }})
    query_value: Optional[guestattributesvalue.GuestAttributesValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryValue' }})
    
