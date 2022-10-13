from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1Changelog:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmail' }})
    
