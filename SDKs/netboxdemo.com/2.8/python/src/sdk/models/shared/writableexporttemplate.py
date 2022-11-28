from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableExportTemplateTemplateLanguageEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclass
class WritableExportTemplateInput:
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_extension') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    template_language: Optional[WritableExportTemplateTemplateLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_language') }})
    
