from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1AutoScaling:
    r"""GoogleCloudMlV1AutoScaling
    Options for automatically scaling a model.
    """
    
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNodes') }})
    metrics: Optional[List[GoogleCloudMlV1MetricSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNodes') }})
    
