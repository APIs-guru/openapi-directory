from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation:
    r"""GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
    Image bounding poly annotation. It represents a polygon including bounding box in the image.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    bounding_poly: Optional[GoogleCloudDatalabelingV1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    normalized_bounding_poly: Optional[GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedBoundingPoly') }})
    
