from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SocialMetaTagInfo:
    social_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socialDescription' }})
    social_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socialImageLink' }})
    social_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socialTitle' }})
    
