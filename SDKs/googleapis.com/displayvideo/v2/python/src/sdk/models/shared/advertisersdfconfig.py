from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sdfconfig


@dataclass_json
@dataclass
class AdvertiserSdfConfig:
    override_partner_sdf_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overridePartnerSdfConfig' }})
    sdf_config: Optional[sdfconfig.SdfConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdfConfig' }})
    
