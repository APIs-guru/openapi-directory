from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GcsDestinationConfig:
    r"""GcsDestinationConfig
    Google Cloud Storage destination configuration
    """
    
    avro_file_format: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avroFileFormat') }})
    file_rotation_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileRotationInterval') }})
    file_rotation_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileRotationMb') }})
    json_file_format: Optional[JSONFileFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonFileFormat') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
