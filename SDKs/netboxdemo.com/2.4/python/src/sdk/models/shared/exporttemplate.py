from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExportTemplateInput:
    content_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_extension') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    

@dataclass_json
@dataclass
class ExportTemplate:
    content_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    template_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_extension') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    
