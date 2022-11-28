from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation:
    r"""GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation
    A polyline for the image annotation.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    normalized_polyline: Optional[GoogleCloudDatalabelingV1beta1NormalizedPolyline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedPolyline') }})
    polyline: Optional[GoogleCloudDatalabelingV1beta1Polyline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyline') }})
    
