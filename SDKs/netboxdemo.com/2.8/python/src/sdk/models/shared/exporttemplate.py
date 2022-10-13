from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExportTemplateTemplateLanguageLabelEnum(str, Enum):
    DJANGO = "Django"
    JINJA2 = "Jinja2"

class ExportTemplateTemplateLanguageValueEnum(str, Enum):
    DJANGO = "django"
    JINJA2 = "jinja2"


@dataclass_json
@dataclass
class ExportTemplateTemplateLanguageTemplateLanguage:
    label: ExportTemplateTemplateLanguageLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: ExportTemplateTemplateLanguageValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ExportTemplate:
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_extension' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mime_type' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    template_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_code' }})
    template_language: Optional[ExportTemplateTemplateLanguageTemplateLanguage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_language' }})
    
