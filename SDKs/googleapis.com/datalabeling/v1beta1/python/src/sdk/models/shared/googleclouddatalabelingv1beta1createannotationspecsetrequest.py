from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest
    Request message for CreateAnnotationSpecSet.
    """
    
    annotation_spec_set: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpecSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    
