from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2envvarsource


@dataclass_json
@dataclass
class GoogleCloudRunV2EnvVar:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_source: Optional[googlecloudrunv2envvarsource.GoogleCloudRunV2EnvVarSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueSource' }})
    
