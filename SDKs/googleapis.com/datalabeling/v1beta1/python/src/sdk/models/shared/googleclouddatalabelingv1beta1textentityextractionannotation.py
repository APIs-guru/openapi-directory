from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation:
    r"""GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation
    Text entity extraction annotation.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    sequential_segment: Optional[GoogleCloudDatalabelingV1beta1SequentialSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequentialSegment') }})
    
