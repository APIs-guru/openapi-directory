from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig
    Provides details for how an evaluation job sends email alerts based on the results of a run.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    min_acceptable_mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAcceptableMeanAveragePrecision') }})
    
