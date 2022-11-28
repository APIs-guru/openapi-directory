from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata:
    r"""GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
    Metadata on AnnotatedDataset.
    """
    
    bounding_poly_config: Optional[GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    event_config: Optional[GoogleCloudDatalabelingV1beta1EventConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventConfig') }})
    human_annotation_config: Optional[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAnnotationConfig') }})
    image_classification_config: Optional[GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    object_detection_config: Optional[GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionConfig') }})
    object_tracking_config: Optional[GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    polyline_config: Optional[GoogleCloudDatalabelingV1beta1PolylineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polylineConfig') }})
    segmentation_config: Optional[GoogleCloudDatalabelingV1beta1SegmentationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentationConfig') }})
    text_classification_config: Optional[GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    text_entity_extraction_config: Optional[GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textEntityExtractionConfig') }})
    video_classification_config: Optional[GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationConfig') }})
    
