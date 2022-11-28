from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuxiliaryVersionConfigInput:
    r"""AuxiliaryVersionConfigInput
    Configuration information for the auxiliary service versions.
    """
    
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    network_config: Optional[NetworkConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class AuxiliaryVersionConfig:
    r"""AuxiliaryVersionConfig
    Configuration information for the auxiliary service versions.
    """
    
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
