from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ClassificationMetrics:
    r"""GoogleCloudDatalabelingV1beta1ClassificationMetrics
    Metrics calculated for a classification model.
    """
    
    confusion_matrix: Optional[GoogleCloudDatalabelingV1beta1ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confusionMatrix') }})
    pr_curve: Optional[GoogleCloudDatalabelingV1beta1PrCurve] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prCurve') }})
    
