from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GdataObjectID:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    
