from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InlineSecret:
    env_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envMap' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    
