from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplianceVersion:
    critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critical' }})
    release_notes_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseNotesUri' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
