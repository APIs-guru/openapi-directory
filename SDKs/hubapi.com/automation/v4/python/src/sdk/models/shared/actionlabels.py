from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionLabels:
    action_card_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionCardContent' }})
    action_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionDescription' }})
    action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionName' }})
    app_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDisplayName' }})
    input_field_descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFieldDescriptions' }})
    input_field_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFieldLabels' }})
    
