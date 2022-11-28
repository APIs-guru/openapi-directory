from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentResult:
    r"""GoogleCloudDialogflowCxV3ExperimentResult
    The inference result which includes an objective metric to optimize and the confidence interval.
    """
    
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    version_metrics: Optional[List[GoogleCloudDialogflowCxV3ExperimentResultVersionMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionMetrics') }})
    
