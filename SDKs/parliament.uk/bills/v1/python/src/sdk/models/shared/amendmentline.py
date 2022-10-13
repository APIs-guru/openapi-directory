from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AmendmentLine:
    hanging_indentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangingIndentation' }})
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    indentation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentation' }})
    is_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isImage' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
