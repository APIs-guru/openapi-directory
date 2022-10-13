from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportStats:
    exported_artifact_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportedArtifactCount' }})
    size_in_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInBytes' }})
    total_artifact_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalArtifactCount' }})
    
