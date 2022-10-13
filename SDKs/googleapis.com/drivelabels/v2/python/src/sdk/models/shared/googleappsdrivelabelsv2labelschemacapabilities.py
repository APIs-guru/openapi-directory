from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2LabelSchemaCapabilities:
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDelete' }})
    can_disable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDisable' }})
    can_enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canEnable' }})
    can_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUpdate' }})
    
