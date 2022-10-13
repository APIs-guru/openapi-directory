from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taglanguagemarshaller
from . import tagtypemarshaller


@dataclass_json
@dataclass
class TagMarshaller:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[taglanguagemarshaller.TagLanguageMarshaller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[tagtypemarshaller.TagTypeMarshaller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
