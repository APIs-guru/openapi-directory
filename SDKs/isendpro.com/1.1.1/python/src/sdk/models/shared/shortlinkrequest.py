from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShortlinkRequest:
    keyid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    shortlink: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortlink' }})
    
