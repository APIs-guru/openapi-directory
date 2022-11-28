from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationValue:
    r"""GoogleCloudDatalabelingV1beta1AnnotationValue
    Annotation value for an example.
    """
    
    image_bounding_poly_annotation: Optional[GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageBoundingPolyAnnotation') }})
    image_classification_annotation: Optional[GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationAnnotation') }})
    image_polyline_annotation: Optional[GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePolylineAnnotation') }})
    image_segmentation_annotation: Optional[GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageSegmentationAnnotation') }})
    text_classification_annotation: Optional[GoogleCloudDatalabelingV1beta1TextClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationAnnotation') }})
    text_entity_extraction_annotation: Optional[GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionAnnotation') }})
    video_classification_annotation: Optional[GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationAnnotation') }})
    video_event_annotation: Optional[GoogleCloudDatalabelingV1beta1VideoEventAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoEventAnnotation') }})
    video_object_tracking_annotation: Optional[GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoObjectTrackingAnnotation') }})
    
