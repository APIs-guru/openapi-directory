from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcsdestination


@dataclass_json
@dataclass
class DocumentOutputConfig:
    gcs_destination: Optional[gcsdestination.GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
