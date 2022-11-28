from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpgradeSettingsStrategyEnum(str, Enum):
    NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED"
    BLUE_GREEN = "BLUE_GREEN"
    SURGE = "SURGE"


@dataclass_json
@dataclass
class UpgradeSettings:
    r"""UpgradeSettings
    These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
    """
    
    blue_green_settings: Optional[BlueGreenSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenSettings') }})
    max_surge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSurge') }})
    max_unavailable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUnavailable') }})
    strategy: Optional[UpgradeSettingsStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    
