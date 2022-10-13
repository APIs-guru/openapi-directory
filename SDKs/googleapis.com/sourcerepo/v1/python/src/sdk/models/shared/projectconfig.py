from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsubconfig


@dataclass_json
@dataclass
class ProjectConfig:
    enable_private_key_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivateKeyCheck' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pubsub_configs: Optional[dict[str, pubsubconfig.PubsubConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubConfigs' }})
    
