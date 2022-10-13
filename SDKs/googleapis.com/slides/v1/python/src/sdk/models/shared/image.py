from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageproperties
from . import placeholder


@dataclass_json
@dataclass
class Image:
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUrl' }})
    image_properties: Optional[imageproperties.ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageProperties' }})
    placeholder: Optional[placeholder.Placeholder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeholder' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    
