from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bluegreensettings

class UpgradeSettingsStrategyEnum(str, Enum):
    NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    BLUE_GREEN = "BLUE_GREEN"
    SURGE = "SURGE"


@dataclass_json
@dataclass
class UpgradeSettings:
    blue_green_settings: Optional[bluegreensettings.BlueGreenSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueGreenSettings' }})
    max_surge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSurge' }})
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUnavailable' }})
    strategy: Optional[UpgradeSettingsStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strategy' }})
    
