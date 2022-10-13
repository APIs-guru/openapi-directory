from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import preprocessingconfig


@dataclass_json
@dataclass
class Input:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    preprocessing_config: Optional[preprocessingconfig.PreprocessingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preprocessingConfig' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
