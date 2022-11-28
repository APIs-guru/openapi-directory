from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterConfiguration:
    clustering: Optional[ClusterConfigurationClustering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clustering') }})
    response_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_type') }})
    routing: Optional[ClusterConfigurationRouting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    
