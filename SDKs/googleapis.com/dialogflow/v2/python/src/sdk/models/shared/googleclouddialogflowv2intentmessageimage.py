from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageImage:
    accessibility_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibilityText' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    
