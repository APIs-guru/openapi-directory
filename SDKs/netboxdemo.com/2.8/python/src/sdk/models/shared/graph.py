from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GraphTemplateLanguageEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclass
class GraphInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    template_language: Optional[GraphTemplateLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_language') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    

@dataclass_json
@dataclass
class Graph:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    template_language: Optional[GraphTemplateLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_language') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
