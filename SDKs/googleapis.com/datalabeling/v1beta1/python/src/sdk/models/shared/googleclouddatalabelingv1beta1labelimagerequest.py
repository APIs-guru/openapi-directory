from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    BOUNDING_BOX = "BOUNDING_BOX"
    ORIENTED_BOUNDING_BOX = "ORIENTED_BOUNDING_BOX"
    BOUNDING_POLY = "BOUNDING_POLY"
    POLYLINE = "POLYLINE"
    SEGMENTATION = "SEGMENTATION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1LabelImageRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelImageRequest
    Request message for starting an image labeling task.
    """
    
    basic_config: Optional[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    bounding_poly_config: Optional[GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    image_classification_config: Optional[GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    polyline_config: Optional[GoogleCloudDatalabelingV1beta1PolylineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polylineConfig') }})
    segmentation_config: Optional[GoogleCloudDatalabelingV1beta1SegmentationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentationConfig') }})
    
