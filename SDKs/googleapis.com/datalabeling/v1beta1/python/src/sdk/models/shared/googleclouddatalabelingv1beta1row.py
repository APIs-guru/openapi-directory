from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Row:
    r"""GoogleCloudDatalabelingV1beta1Row
    A row in the confusion matrix. Each entry in this row has the same ground truth label.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    entries: Optional[List[GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
