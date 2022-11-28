from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ExportTemplateTemplateLanguageLabelEnum(str, Enum):
    DJANGO = "Django"
    JINJA2 = "Jinja2"

class ExportTemplateTemplateLanguageValueEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclass
class ExportTemplateTemplateLanguage:
    label: ExportTemplateTemplateLanguageLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: ExportTemplateTemplateLanguageValueEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ExportTemplate:
    content_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_extension') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    template_language: Optional[ExportTemplateTemplateLanguage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_language') }})
    
