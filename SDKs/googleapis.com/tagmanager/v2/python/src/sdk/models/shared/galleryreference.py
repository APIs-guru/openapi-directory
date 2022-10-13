from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GalleryReference:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    is_modified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isModified' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
