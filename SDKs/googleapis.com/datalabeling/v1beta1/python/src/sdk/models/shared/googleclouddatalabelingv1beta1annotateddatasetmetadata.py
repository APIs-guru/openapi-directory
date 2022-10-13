from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1boundingpolyconfig
from . import googleclouddatalabelingv1beta1eventconfig
from . import googleclouddatalabelingv1beta1humanannotationconfig
from . import googleclouddatalabelingv1beta1imageclassificationconfig
from . import googleclouddatalabelingv1beta1objectdetectionconfig
from . import googleclouddatalabelingv1beta1objecttrackingconfig
from . import googleclouddatalabelingv1beta1polylineconfig
from . import googleclouddatalabelingv1beta1segmentationconfig
from . import googleclouddatalabelingv1beta1textclassificationconfig
from . import googleclouddatalabelingv1beta1textentityextractionconfig
from . import googleclouddatalabelingv1beta1videoclassificationconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata:
    bounding_poly_config: Optional[googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPolyConfig' }})
    event_config: Optional[googleclouddatalabelingv1beta1eventconfig.GoogleCloudDatalabelingV1beta1EventConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventConfig' }})
    human_annotation_config: Optional[googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAnnotationConfig' }})
    image_classification_config: Optional[googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationConfig' }})
    object_detection_config: Optional[googleclouddatalabelingv1beta1objectdetectionconfig.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectDetectionConfig' }})
    object_tracking_config: Optional[googleclouddatalabelingv1beta1objecttrackingconfig.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingConfig' }})
    polyline_config: Optional[googleclouddatalabelingv1beta1polylineconfig.GoogleCloudDatalabelingV1beta1PolylineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polylineConfig' }})
    segmentation_config: Optional[googleclouddatalabelingv1beta1segmentationconfig.GoogleCloudDatalabelingV1beta1SegmentationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationConfig' }})
    text_classification_config: Optional[googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationConfig' }})
    text_entity_extraction_config: Optional[googleclouddatalabelingv1beta1textentityextractionconfig.GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textEntityExtractionConfig' }})
    video_classification_config: Optional[googleclouddatalabelingv1beta1videoclassificationconfig.GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassificationConfig' }})
    
