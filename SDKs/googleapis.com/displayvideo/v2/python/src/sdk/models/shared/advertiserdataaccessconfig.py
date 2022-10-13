from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import advertisersdfconfig


@dataclass_json
@dataclass
class AdvertiserDataAccessConfig:
    sdf_config: Optional[advertisersdfconfig.AdvertiserSdfConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdfConfig' }})
    
