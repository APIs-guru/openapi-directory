from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkconfig


@dataclass_json
@dataclass
class AuxiliaryVersionConfig:
    config_overrides: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configOverrides' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
