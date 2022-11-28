from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClientConfig:
    r"""ClientConfig
    All xds configs for a particular client.
    """
    
    node: Optional[Node] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node') }})
    xds_config: Optional[List[PerXdsConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xdsConfig') }})
    
