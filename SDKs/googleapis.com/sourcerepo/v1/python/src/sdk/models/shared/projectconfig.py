from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectConfig:
    r"""ProjectConfig
    Cloud Source Repositories configuration of a project.
    """
    
    enable_private_key_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateKeyCheck') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_configs: Optional[dict[str, PubsubConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubConfigs') }})
    
