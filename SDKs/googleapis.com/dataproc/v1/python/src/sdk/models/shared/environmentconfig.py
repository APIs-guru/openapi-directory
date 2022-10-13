from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import executionconfig
from . import peripheralsconfig


@dataclass_json
@dataclass
class EnvironmentConfig:
    execution_config: Optional[executionconfig.ExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionConfig' }})
    peripherals_config: Optional[peripheralsconfig.PeripheralsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peripheralsConfig' }})
    
