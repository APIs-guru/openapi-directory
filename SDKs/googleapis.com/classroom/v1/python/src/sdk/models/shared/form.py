from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Form:
    form_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formUrl' }})
    response_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseUrl' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
