from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cmhybridconfig
from . import thirdpartyonlyconfig


@dataclass_json
@dataclass
class AdvertiserAdServerConfig:
    cm_hybrid_config: Optional[cmhybridconfig.CmHybridConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmHybridConfig' }})
    third_party_only_config: Optional[thirdpartyonlyconfig.ThirdPartyOnlyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdPartyOnlyConfig' }})
    
