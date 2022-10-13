from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadSubtitleDto:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    format: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    is_forced: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsForced' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    
