from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configsource


@dataclass_json
@dataclass
class SubmitConfigSourceRequest:
    config_source: Optional[configsource.ConfigSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSource' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
