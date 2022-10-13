from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1GcsDestination:
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputUri' }})
    
