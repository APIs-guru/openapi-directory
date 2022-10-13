from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Browser:
    browser_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserVersionId' }})
    dart_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dartId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    major_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
