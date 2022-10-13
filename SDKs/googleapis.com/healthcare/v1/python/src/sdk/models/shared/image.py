from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Image:
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsUri' }})
    raw_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawBytes' }})
    
