from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingcomponentconfig


@dataclass_json
@dataclass
class LoggingConfig:
    component_config: Optional[loggingcomponentconfig.LoggingComponentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentConfig' }})
    
