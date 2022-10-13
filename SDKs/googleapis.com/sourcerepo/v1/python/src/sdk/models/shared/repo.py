from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mirrorconfig
from . import pubsubconfig


@dataclass_json
@dataclass
class Repo:
    mirror_config: Optional[mirrorconfig.MirrorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mirrorConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pubsub_configs: Optional[dict[str, pubsubconfig.PubsubConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubConfigs' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
