from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportTemplate:
    content_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_extension' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mime_type' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    template_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_code' }})
    
