from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mediaproperties


@dataclass_json
@dataclass
class Image:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    content_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUri' }})
    properties: Optional[mediaproperties.MediaProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    source_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUri' }})
    
