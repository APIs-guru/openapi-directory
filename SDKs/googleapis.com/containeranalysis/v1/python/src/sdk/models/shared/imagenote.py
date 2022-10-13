from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fingerprint


@dataclass_json
@dataclass
class ImageNote:
    fingerprint: Optional[fingerprint.Fingerprint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUrl' }})
    
