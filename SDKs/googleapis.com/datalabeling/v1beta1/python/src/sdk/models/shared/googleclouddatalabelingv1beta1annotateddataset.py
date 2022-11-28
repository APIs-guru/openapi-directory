from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudDatalabelingV1beta1AnnotatedDataset
    AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
    """
    
    annotation_source: Optional[GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSource') }})
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingResources') }})
    completed_example_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedExampleCount') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    example_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleCount') }})
    label_stats: Optional[GoogleCloudDatalabelingV1beta1LabelStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelStats') }})
    metadata: Optional[GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
