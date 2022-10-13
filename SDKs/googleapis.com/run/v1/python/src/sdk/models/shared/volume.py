from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmapvolumesource
from . import secretvolumesource


@dataclass_json
@dataclass
class Volume:
    config_map: Optional[configmapvolumesource.ConfigMapVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configMap' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[secretvolumesource.SecretVolumeSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
