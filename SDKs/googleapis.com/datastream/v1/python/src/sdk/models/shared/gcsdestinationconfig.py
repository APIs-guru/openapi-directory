from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import jsonfileformat


@dataclass_json
@dataclass
class GcsDestinationConfig:
    avro_file_format: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avroFileFormat' }})
    file_rotation_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileRotationInterval' }})
    file_rotation_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileRotationMb' }})
    json_file_format: Optional[jsonfileformat.JSONFileFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonFileFormat' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
