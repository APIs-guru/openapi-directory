from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics:
    r"""GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics
    Version variant and associated metrics.
    """
    
    metrics: Optional[List[GoogleCloudDialogflowCxV3ExperimentResultMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionCount') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
