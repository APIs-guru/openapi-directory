from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Presentation:
    additional_image_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImageUrls' }})
    display_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayImageUrl' }})
    media_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaUrls' }})
    
