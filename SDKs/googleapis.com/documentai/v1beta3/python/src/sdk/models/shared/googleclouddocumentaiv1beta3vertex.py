from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3Vertex:
    x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x' }})
    y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'y' }})
    
