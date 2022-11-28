from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingConfig:
    r"""LoggingConfig
    LoggingConfig is cluster logging configuration.
    """
    
    component_config: Optional[LoggingComponentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentConfig') }})
    
