from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IosVersion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    major_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    supported_xcode_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedXcodeVersionIds' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
