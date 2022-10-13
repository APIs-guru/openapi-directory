from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1onclick


@dataclass_json
@dataclass
class GoogleAppsCardV1Image:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    on_click: Optional[googleappscardv1onclick.GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    
