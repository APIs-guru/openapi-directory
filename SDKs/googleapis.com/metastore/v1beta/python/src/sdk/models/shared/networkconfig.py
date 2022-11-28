from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkConfig:
    r"""NetworkConfig
    Network configuration for the Dataproc Metastore service.
    """
    
    consumers: Optional[List[Consumer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumers') }})
    

@dataclass_json
@dataclass
class NetworkConfigInput:
    r"""NetworkConfigInput
    Network configuration for the Dataproc Metastore service.
    """
    
    consumers: Optional[List[ConsumerInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumers') }})
    
