from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoEventAnnotation:
    r"""GoogleCloudDatalabelingV1beta1VideoEventAnnotation
    Video event annotation.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    time_segment: Optional[GoogleCloudDatalabelingV1beta1TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSegment') }})
    
