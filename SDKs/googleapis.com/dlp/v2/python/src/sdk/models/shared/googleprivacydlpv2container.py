from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Container:
    full_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullPath' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativePath' }})
    root_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootPath' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
