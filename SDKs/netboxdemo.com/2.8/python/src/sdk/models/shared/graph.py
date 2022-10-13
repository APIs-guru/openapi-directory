from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GraphTemplateLanguageTemplateLanguageEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclass
class Graph:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    template_language: Optional[GraphTemplateLanguageTemplateLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_language' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
