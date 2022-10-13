from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcssource


@dataclass_json
@dataclass
class InputConfig:
    gcs_source: Optional[gcssource.GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
