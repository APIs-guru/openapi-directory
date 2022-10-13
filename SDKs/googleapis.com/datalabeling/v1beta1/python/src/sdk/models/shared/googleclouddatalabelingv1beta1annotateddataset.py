from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1labelstats
from . import googleclouddatalabelingv1beta1annotateddatasetmetadata

class GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum(str, Enum):
    ANNOTATION_SOURCE_UNSPECIFIED = "ANNOTATION_SOURCE_UNSPECIFIED"
    OPERATOR = "OPERATOR"

class GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    IMAGE_CLASSIFICATION_ANNOTATION = "IMAGE_CLASSIFICATION_ANNOTATION"
    IMAGE_BOUNDING_BOX_ANNOTATION = "IMAGE_BOUNDING_BOX_ANNOTATION"
    IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    IMAGE_BOUNDING_POLY_ANNOTATION = "IMAGE_BOUNDING_POLY_ANNOTATION"
    IMAGE_POLYLINE_ANNOTATION = "IMAGE_POLYLINE_ANNOTATION"
    IMAGE_SEGMENTATION_ANNOTATION = "IMAGE_SEGMENTATION_ANNOTATION"
    VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    VIDEO_OBJECT_TRACKING_ANNOTATION = "VIDEO_OBJECT_TRACKING_ANNOTATION"
    VIDEO_OBJECT_DETECTION_ANNOTATION = "VIDEO_OBJECT_DETECTION_ANNOTATION"
    VIDEO_EVENT_ANNOTATION = "VIDEO_EVENT_ANNOTATION"
    TEXT_CLASSIFICATION_ANNOTATION = "TEXT_CLASSIFICATION_ANNOTATION"
    TEXT_ENTITY_EXTRACTION_ANNOTATION = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    GENERAL_CLASSIFICATION_ANNOTATION = "GENERAL_CLASSIFICATION_ANNOTATION"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotatedDataset:
    annotation_source: Optional[GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSource' }})
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingResources' }})
    completed_example_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completedExampleCount' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    example_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleCount' }})
    label_stats: Optional[googleclouddatalabelingv1beta1labelstats.GoogleCloudDatalabelingV1beta1LabelStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelStats' }})
    metadata: Optional[googleclouddatalabelingv1beta1annotateddatasetmetadata.GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
