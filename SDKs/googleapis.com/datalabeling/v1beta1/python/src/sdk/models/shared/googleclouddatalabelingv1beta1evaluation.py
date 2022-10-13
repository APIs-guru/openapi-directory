from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1evaluationconfig
from . import googleclouddatalabelingv1beta1evaluationmetrics

class GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum(str, Enum):
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
class GoogleCloudDatalabelingV1beta1Evaluation:
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    config: Optional[googleclouddatalabelingv1beta1evaluationconfig.GoogleCloudDatalabelingV1beta1EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    evaluated_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedItemCount' }})
    evaluation_job_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationJobRunTime' }})
    evaluation_metrics: Optional[googleclouddatalabelingv1beta1evaluationmetrics.GoogleCloudDatalabelingV1beta1EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMetrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
