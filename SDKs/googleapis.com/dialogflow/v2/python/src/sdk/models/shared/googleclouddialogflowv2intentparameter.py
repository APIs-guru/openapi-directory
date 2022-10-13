from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentParameter:
    default_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_type_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypeDisplayName' }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isList' }})
    mandatory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatory' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prompts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prompts' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
