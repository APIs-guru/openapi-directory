from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ConfusionMatrix:
    r"""GoogleCloudDatalabelingV1beta1ConfusionMatrix
    Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
    """
    
    row: Optional[List[GoogleCloudDatalabelingV1beta1Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
